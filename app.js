/**
 * MY GOVERNMENT EXAM JOURNEY - CORE APPLICATION ENGINE
 * Specifically crafted for Manikanta
 */

// Global State
const APP_STORAGE_KEY = "my_gov_exam_journey_state_v1";

const defaultState = {
  studentName: "Manikanta",
  activeTab: "today",
  currentReasoningIndex: 0,
  currentMathsIndex: 0,
  currentGSIndex: 0,
  currentPanchayatIndex: 0,
  activeTrack: "reasoning", // 'reasoning' | 'maths' | 'gs' | 'panchayat'
  completedTopics: {},
  taskChecklist: {
    video: false,
    basicEx: false,
    mcqs: false,
    assessment: false,
    rsAggarwal: false
  },
  lastAssessmentScore: null,
  activeMode: "normal", // 'normal' | 'tired' | 'busy'
  revisionQueue: [
    {
      id: "rev-init-1",
      topicId: "reas-01",
      title: "Directions",
      subject: "Reasoning",
      intervalDays: 1,
      dueDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
      status: "pending"
    }
  ],
  mistakeBook: [
    {
      id: "m-01",
      topic: "Percentages",
      question: "If price of sugar increases by 25%, by how much should consumption decrease?",
      myAnswer: "25%",
      correctAnswer: "20%",
      mistakeType: "Concept mistake",
      reason: "Confused price increase with consumption change.",
      correctMethod: "Use formula: [r / (100 + r)] * 100 = 25/125 * 100 = 20%.",
      date: new Date().toISOString().split("T")[0]
    }
  ],
  stats: {
    questionsAnswered: 4,
    questionsCorrect: 3,
    sessionsCompleted: 1
  },
  mathCurrentLevel: 2,
  soundEnabled: true,
  darkTheme: false,
  ambientSound: "off"
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(APP_STORAGE_KEY);
    if (saved) {
      return { ...defaultState, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn("Could not load state from localStorage:", e);
  }
  return { ...defaultState };
}

function saveState() {
  try {
    localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Could not save state:", e);
  }
}

// Audio Engine using Web Audio API (Zero external assets)
let audioCtx = null;
let ambientNoiseNode = null;
let ambientGainNode = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playGentleChime() {
  if (!state.soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (Soothing major chord)

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + idx * 0.12);

    gain.gain.setValueAtTime(0.0001, now + idx * 0.12);
    gain.gain.exponentialRampToValueAtTime(0.15, now + idx * 0.12 + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.12 + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.12);
    osc.stop(now + idx * 0.12 + 1.3);
  });
}

function setAmbientSound(type) {
  state.ambientSound = type;
  saveState();

  const ctx = getAudioContext();
  if (!ctx) return;

  if (ambientNoiseNode) {
    ambientNoiseNode.stop();
    ambientNoiseNode.disconnect();
    ambientNoiseNode = null;
  }

  if (type === "off") return;

  // Generate Pink / Brown Noise for deep calm focus
  const bufferSize = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  let lastOut = 0.0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    if (type === "rain") {
      lastOut = lastOut * 0.95 + white * 0.05;
      data[i] = lastOut * 3.5;
    } else {
      lastOut = (lastOut + 0.02 * white) / 1.02;
      data[i] = lastOut * 3.5;
    }
  }

  ambientNoiseNode = ctx.createBufferSource();
  ambientNoiseNode.buffer = buffer;
  ambientNoiseNode.loop = true;

  ambientGainNode = ctx.createGain();
  ambientGainNode.gain.setValueAtTime(0.03, ctx.currentTime);

  ambientNoiseNode.connect(ambientGainNode);
  ambientGainNode.connect(ctx.destination);
  ambientNoiseNode.start();
}

// Timer Logic
let timerInterval = null;
let timerSecondsLeft = 45 * 60;
let timerIsRunning = false;

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function toggleTimer() {
  if (timerIsRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer(durationMinutes) {
  if (durationMinutes) {
    timerSecondsLeft = durationMinutes * 60;
  }
  if (timerInterval) clearInterval(timerInterval);

  timerIsRunning = true;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (timerSecondsLeft > 0) {
      timerSecondsLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timerIsRunning = false;
      playGentleChime();
      alert("Calm study session completed! Take a deep breath. 🌱");
      updateTimerDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerIsRunning = false;
  updateTimerDisplay();
}

function resetTimer(mins = 45) {
  if (timerInterval) clearInterval(timerInterval);
  timerIsRunning = false;
  timerSecondsLeft = mins * 60;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const display = document.getElementById("timer-digits");
  const toggleBtn = document.getElementById("timer-toggle-btn");
  if (display) {
    display.textContent = formatTime(timerSecondsLeft);
  }
  if (toggleBtn) {
    toggleBtn.textContent = timerIsRunning ? "⏸ Pause" : "▶ Start Timer";
  }
}
// UI Navigation
function switchTab(tabId) {
  state.activeTab = tabId;
  saveState();

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });

  const views = ["today", "subjects", "practice", "revision", "mistakes", "progress", "settings"];
  views.forEach((v) => {
    const el = document.getElementById(`view-${v}`);
    if (el) {
      el.style.display = v === tabId ? "block" : "none";
    }
  });

  if (tabId === "today") renderTodayView();
  else if (tabId === "subjects") renderSubjectsView();
  else if (tabId === "practice") renderPracticeView();
  else if (tabId === "revision") renderRevisionView();
  else if (tabId === "mistakes") renderMistakesView();
  else if (tabId === "progress") renderProgressView();
  else if (tabId === "settings") renderSettingsView();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Current Active Task Resolution
function getCurrentTask() {
  if (state.activeTrack === "reasoning") {
    const topic = window.REASONING_SYLLABUS[state.currentReasoningIndex] || window.REASONING_SYLLABUS[0];
    const nextTopic = window.REASONING_SYLLABUS[state.currentReasoningIndex + 1];
    return {
      type: "reasoning",
      badge: "🧠 Reasoning",
      tagClass: "tag-reasoning",
      topic: topic,
      nextTopic: nextTopic ? `Reasoning — ${nextTopic.title}` : "Maths — Number Systems",
      estimated: "45–60 minutes"
    };
  } else if (state.activeTrack === "maths") {
    const topic = window.MATHS_SYLLABUS[state.currentMathsIndex] || window.MATHS_SYLLABUS[0];
    const nextTopic = window.MATHS_SYLLABUS[state.currentMathsIndex + 1];
    return {
      type: "maths",
      badge: "📐 Maths Without Fear",
      tagClass: "tag-maths",
      topic: topic,
      nextTopic: nextTopic ? `Maths — ${nextTopic.title}` : "General Studies — Indian Polity",
      estimated: "45–50 minutes"
    };
  } else if (state.activeTrack === "gs") {
    const topic = window.GENERAL_STUDIES_SYLLABUS[state.currentGSIndex] || window.GENERAL_STUDIES_SYLLABUS[0];
    const nextTopic = window.GENERAL_STUDIES_SYLLABUS[state.currentGSIndex + 1];
    return {
      type: "gs",
      badge: "🌍 General Studies",
      tagClass: "tag-gs",
      topic: topic,
      nextTopic: nextTopic ? `GS — ${nextTopic.title}` : "Panchayat Secretary — Evolution of PR",
      estimated: "30 minutes"
    };
  } else {
    const topic = window.PANCHAYAT_SECRETARY_SYLLABUS[state.currentPanchayatIndex] || window.PANCHAYAT_SECRETARY_SYLLABUS[0];
    const nextTopic = window.PANCHAYAT_SECRETARY_SYLLABUS[state.currentPanchayatIndex + 1];
    return {
      type: "panchayat",
      badge: "🌾 Panchayat Secretary",
      tagClass: "tag-panchayat",
      topic: topic,
      nextTopic: nextTopic ? `Panchayat — ${nextTopic.title}` : "Reasoning — Express Revision",
      estimated: "30 minutes"
    };
  }
}

function renderTodayView() {
  const container = document.getElementById("view-today");
  if (!container) return;

  const current = getCurrentTask();
  const topic = current.topic;

  const hour = new Date().getHours();
  let timeGreeting = "Good morning";
  if (hour >= 12 && hour < 17) timeGreeting = "Good afternoon";
  else if (hour >= 17) timeGreeting = "Good evening";

  container.innerHTML = `
    <!-- Calm Greeting -->
    <div class="calm-welcome-banner">
      <div class="greeting-text">
        <h1>${timeGreeting}, ${state.studentName} 👋</h1>
        <p>You don't need to finish everything today. Just complete today's task.</p>
      </div>
      <div class="calm-pill-badge">
        <span>🌱 Step-by-step progress</span>
      </div>
    </div>

    <!-- Mode Selector Cards -->
    <div class="modes-bar">
      <div class="mode-card ${state.activeMode === "normal" ? "active" : ""}" onclick="setStudyMode('normal')">
        <div class="mode-card-header">
          <span class="mode-card-title">⚡ Standard Day</span>
          <span class="mode-card-time">2h 45m</span>
        </div>
        <p class="mode-card-desc">Reasoning (45m) + Maths (45m) + GS (30m) + Panchayat (30m) + Revision (15m)</p>
      </div>

      <div class="mode-card ${state.activeMode === "tired" ? "active" : ""}" onclick="setStudyMode('tired')">
        <div class="mode-card-header">
          <span class="mode-card-title">🛋️ I Am Tired Today</span>
          <span class="mode-card-time">1 hour</span>
        </div>
        <p class="mode-card-desc">It's okay to have a lighter day. Reasoning (20m) + Easy Maths (20m) + Light Revision (20m).</p>
      </div>

      <div class="mode-card ${state.activeMode === "busy" ? "active" : ""}" onclick="setStudyMode('busy')">
        <div class="mode-card-header">
          <span class="mode-card-title">⏱️ I Only Have 1 Hour</span>
          <span class="mode-card-time">1 hour</span>
        </div>
        <p class="mode-card-desc">No guilt. Focused 1-hour session to keep your momentum alive.</p>
      </div>
    </div>

    <!-- TODAY'S NEXT TASK CARD -->
    <div class="card today-next-task-card">
      <div class="task-header">
        <span class="task-subject-tag ${current.tagClass}">${current.badge}</span>
        <span class="task-time-estimate">⏱ Estimated time: ${current.estimated}</span>
      </div>

      <h2 class="task-main-title">${topic.title}</h2>

      <div class="task-methodology-quote">
        <strong>The 4 Golden Rules:</strong><br/>
        1. <strong>NxtWave</strong> teaches me.<br/>
        2. <strong>R.S. Aggarwal</strong> gives me extra practice (Reasoning).<br/>
        3. <strong>Assessment</strong> checks my understanding.<br/>
        4. <strong>Revision</strong> helps me remember.
      </div>

      <h3 style="font-size:1.05rem; margin-bottom:12px; font-weight:700;">Do this in order:</h3>

      <div class="task-checklist">
        <label class="task-step-item ${state.taskChecklist.video ? "completed" : ""}">
          <input type="checkbox" class="task-step-checkbox" ${state.taskChecklist.video ? "checked" : ""} onchange="toggleTaskStep('video')">
          <span class="task-step-number">1</span>
          <span>Watch NxtWave video: <em>${topic.nxtWaveVideoTitle || topic.title}</em></span>
        </label>

        <label class="task-step-item ${state.taskChecklist.basicEx ? "completed" : ""}">
          <input type="checkbox" class="task-step-checkbox" ${state.taskChecklist.basicEx ? "checked" : ""} onchange="toggleTaskStep('basicEx')">
          <span class="task-step-number">2</span>
          <span>Complete Basic Exercise (Solve slowly with zero pressure)</span>
        </label>

        <label class="task-step-item ${state.taskChecklist.mcqs ? "completed" : ""}">
          <input type="checkbox" class="task-step-checkbox" ${state.taskChecklist.mcqs ? "checked" : ""} onchange="toggleTaskStep('mcqs')">
          <span class="task-step-number">3</span>
          <span>Complete Company Specific MCQs</span>
        </label>

        <label class="task-step-item ${state.taskChecklist.assessment ? "completed" : ""}">
          <input type="checkbox" class="task-step-checkbox" ${state.taskChecklist.assessment ? "checked" : ""} onchange="toggleTaskStep('assessment')">
          <span class="task-step-number">4</span>
          <span>Take NxtWave Assessment (Record your score below)</span>
        </label>

        ${
          current.type === "reasoning"
            ? `
        <label class="task-step-item ${state.taskChecklist.rsAggarwal ? "completed" : ""}">
          <input type="checkbox" class="task-step-checkbox" ${state.taskChecklist.rsAggarwal ? "checked" : ""} onchange="toggleTaskStep('rsAggarwal')">
          <span class="task-step-number">5</span>
          <span>R.S. Aggarwal Practice: <strong>${topic.rsAggarwalTopic || topic.title}</strong> (Solve 10–15 questions in book)</span>
        </label>
        `
            : `
        <label class="task-step-item ${state.taskChecklist.rsAggarwal ? "completed" : ""}">
          <input type="checkbox" class="task-step-checkbox" ${state.taskChecklist.rsAggarwal ? "checked" : ""} onchange="toggleTaskStep('rsAggarwal')">
          <span class="task-step-number">5</span>
          <span>Review mistakes & solidify formulas (No external book required for Maths)</span>
        </label>
        `
        }
      </div>

      <!-- RS Aggarwal Physical Book Matcher -->
      ${
        current.type === "reasoning"
          ? `
      <div class="rs-aggarwal-box">
        <span style="font-size: 1.5rem;">📖</span>
        <div>
          <strong>R.S. Aggarwal Book Match:</strong> Open your <em>Verbal & Non-Verbal Reasoning</em> book to <strong>"${topic.rsAggarwalTopic}"</strong>. Read 2-3 solved examples and solve 10-15 questions. Do NOT try to finish the whole chapter!
        </div>
      </div>
      `
          : ""
      }

      <!-- Assessment Score Logger & Grading -->
      <div style="background-color:var(--bg-card-subtle); padding:16px 20px; border-radius:var(--radius-md); margin:18px 0; border:1px solid var(--border-color);">
        <label style="display:block; font-weight:700; margin-bottom:8px; font-size:0.95rem;">
          📊 Assessment Score (%):
        </label>
        <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
          <input type="number" id="assessment-score-input" min="0" max="100" placeholder="e.g. 75" value="${state.lastAssessmentScore || ""}" style="padding:10px 14px; border:1px solid var(--border-color); border-radius:var(--radius-sm); font-size:1rem; width:120px; font-weight:700;">
          <button class="btn-secondary" onclick="evaluateAssessmentScore()">Save Score</button>
          <div id="score-feedback-text" style="font-weight:600; font-size:0.95rem;"></div>
        </div>
      </div>

      <div class="task-actions">
        <button class="btn-start-task" onclick="openFocusModal()">
          <span>▶</span> START TASK (FOCUS VIEW)
        </button>
        <button class="btn-secondary" onclick="openLearnZeroForTopic('${topic.id}', '${current.type}')">
          💡 Learn From Zero
        </button>
        <button class="btn-secondary" onclick="markCurrentTopicComplete()">
          ✅ Mark Topic Complete
        </button>
      </div>

      <div class="next-task-preview">
        <span>⏩</span>
        <span>After this: <strong>${current.nextTopic}</strong></span>
      </div>
    </div>

    <!-- Quick Track Switcher -->
    <div class="card">
      <h3 class="card-title">📚 Switch Study Track</h3>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">Want to switch to another subject for today? Pick below:</p>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <button class="btn-secondary ${state.activeTrack === "reasoning" ? "active" : ""}" onclick="setActiveTrack('reasoning')" style="${state.activeTrack === "reasoning" ? "border-color:var(--accent-purple); color:var(--accent-purple); font-weight:700;" : ""}">
          🧠 Reasoning (16 Topics)
        </button>
        <button class="btn-secondary ${state.activeTrack === "maths" ? "active" : ""}" onclick="setActiveTrack('maths')" style="${state.activeTrack === "maths" ? "border-color:var(--accent-blue); color:var(--accent-blue); font-weight:700;" : ""}">
          📐 Maths Without Fear (17 Topics)
        </button>
        <button class="btn-secondary ${state.activeTrack === "gs" ? "active" : ""}" onclick="setActiveTrack('gs')" style="${state.activeTrack === "gs" ? "border-color:var(--accent-amber); color:var(--accent-amber); font-weight:700;" : ""}">
          🌍 General Studies (11 Topics)
        </button>
        <button class="btn-secondary ${state.activeTrack === "panchayat" ? "active" : ""}" onclick="setActiveTrack('panchayat')" style="${state.activeTrack === "panchayat" ? "border-color:var(--accent-primary); color:var(--accent-primary); font-weight:700;" : ""}">
          🌾 AP Panchayat Secretary (25 Topics)
        </button>
      </div>
    </div>
  `;
}

function setStudyMode(mode) {
  state.activeMode = mode;
  saveState();
  renderTodayView();
}

function setActiveTrack(track) {
  state.activeTrack = track;
  state.taskChecklist = { video: false, basicEx: false, mcqs: false, assessment: false, rsAggarwal: false };
  state.lastAssessmentScore = null;
  saveState();
  renderTodayView();
}

function toggleTaskStep(stepKey) {
  state.taskChecklist[stepKey] = !state.taskChecklist[stepKey];
  saveState();
  renderTodayView();
}

function evaluateAssessmentScore() {
  const input = document.getElementById("assessment-score-input");
  const feedback = document.getElementById("score-feedback-text");
  if (!input || !feedback) return;

  const score = parseInt(input.value, 10);
  if (isNaN(score)) {
    feedback.textContent = "Please enter a valid percentage.";
    feedback.style.color = "#dc2626";
    return;
  }

  state.lastAssessmentScore = score;
  saveState();

  if (score < 60) {
    feedback.innerHTML = `⚠️ <strong>Needs another explanation.</strong> We will review this topic again gently without any hurry.`;
    feedback.style.color = "#b45309";
  } else if (score >= 60 && score <= 70) {
    feedback.innerHTML = `🌱 <strong>Almost there!</strong> A short 10-minute revision is scheduled for tomorrow.`;
    feedback.style.color = "#0284c7";
  } else {
    feedback.innerHTML = `🎯 <strong>Topic understood!</strong> Excellent progress. Ready for the next step.`;
    feedback.style.color = "#15803d";
    playGentleChime();
  }
}

function markCurrentTopicComplete() {
  const current = getCurrentTask();
  const topicId = current.topic.id;

  state.completedTopics[topicId] = {
    completedAt: new Date().toISOString(),
    score: state.lastAssessmentScore || 80,
    status: "done"
  };

  state.revisionQueue.push({
    id: `rev-${Date.now()}`,
    topicId: topicId,
    title: current.topic.title,
    subject: current.badge,
    intervalDays: 1,
    dueDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    status: "pending"
  });

  if (state.activeTrack === "reasoning") {
    if (state.currentReasoningIndex < window.REASONING_SYLLABUS.length - 1) {
      state.currentReasoningIndex++;
    }
  } else if (state.activeTrack === "maths") {
    if (state.currentMathsIndex < window.MATHS_SYLLABUS.length - 1) {
      state.currentMathsIndex++;
    }
  } else if (state.activeTrack === "gs") {
    if (state.currentGSIndex < window.GENERAL_STUDIES_SYLLABUS.length - 1) {
      state.currentGSIndex++;
    }
  } else if (state.activeTrack === "panchayat") {
    if (state.currentPanchayatIndex < window.PANCHAYAT_SECRETARY_SYLLABUS.length - 1) {
      state.currentPanchayatIndex++;
    }
  }

  state.taskChecklist = { video: false, basicEx: false, mcqs: false, assessment: false, rsAggarwal: false };
  state.lastAssessmentScore = null;
  state.stats.sessionsCompleted++;
  saveState();

  playGentleChime();
  alert("Great. One topic done. 🌱 Take a short break!");
  renderTodayView();
}
// WHAT SHOULD I DO NOW FOCUS MODAL
function openFocusModal() {
  const current = getCurrentTask();
  const modal = document.getElementById("focus-overlay");
  if (!modal) return;

  const titleEl = document.getElementById("focus-topic-title");
  const badgeEl = document.getElementById("focus-subject-badge");
  const checkContainer = document.getElementById("focus-checklist-container");

  if (titleEl) titleEl.textContent = current.topic.title;
  if (badgeEl) badgeEl.textContent = current.badge;

  if (checkContainer) {
    checkContainer.innerHTML = `
      <div style="background-color:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-lg); padding:20px; margin:20px 0;">
        <h4 style="margin-bottom:12px; font-weight:700;">Step-by-step instructions for right now:</h4>
        <ol style="margin-left:20px; line-height:1.8; color:var(--text-main);">
          <li>Watch NxtWave Video: <em>${current.topic.nxtWaveVideoTitle || current.topic.title}</em></li>
          <li>Complete Basic Exercise slowly.</li>
          <li>Complete Company Specific MCQs.</li>
          <li>Take Assessment to check understanding.</li>
          ${
            current.type === "reasoning"
              ? `<li>Practice 10–15 questions from R.S. Aggarwal: <strong>"${current.topic.rsAggarwalTopic}"</strong>.</li>`
              : `<li>Review mistakes and formulas calmly.</li>`
          }
        </ol>
      </div>
    `;
  }

  modal.classList.add("active");
  resetTimer(45);
}

function closeFocusModal() {
  const modal = document.getElementById("focus-overlay");
  if (modal) modal.classList.remove("active");
  pauseTimer();
}

// CONFUSION RESOLVER MODAL
function openConfusionModal(topicName, questionText) {
  const modal = document.getElementById("confusion-modal");
  if (!modal) return;

  const topicSpan = document.getElementById("confusion-topic-name");
  if (topicSpan) topicSpan.textContent = topicName || "Current Topic";

  const solBox = document.getElementById("confusion-solution-box");
  if (solBox) solBox.style.display = "none";

  modal.classList.add("active");
}

function closeConfusionModal() {
  const modal = document.getElementById("confusion-modal");
  if (modal) modal.classList.remove("active");
}

function selectConfusionOption(type) {
  const solBox = document.getElementById("confusion-solution-box");
  if (!solBox) return;

  const helper = window.CONFUSION_HELPERS[type] || window.CONFUSION_HELPERS.conceptConfusion;

  solBox.innerHTML = `
    <h4 style="font-weight:700; color:var(--accent-primary); margin-bottom:8px;">${helper.title}</h4>
    <p style="font-size:0.95rem; line-height:1.6; color:var(--text-main);">${helper.advice}</p>
    <div style="margin-top:14px; padding:10px 14px; background-color:var(--bg-card); border-radius:var(--radius-sm); font-size:0.88rem;">
      🌱 <em>"Understanding is more important than speed. Take your time."</em>
    </div>
  `;
  solBox.style.display = "block";
}

// LEARN FROM ZERO VIEW
function openLearnZeroForTopic(topicId, type) {
  switchTab("practice");
  const sel = document.getElementById("practice-topic-selector");
  if (sel) {
    sel.value = topicId;
    loadPracticeTopic(topicId);
  }
}

// SUBJECTS VIEW
function renderSubjectsView() {
  const container = document.getElementById("view-subjects");
  if (!container) return;

  container.innerHTML = `
    <div class="card">
      <h2 class="card-title">📚 Full Study Tracks</h2>
      <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:20px;">
        Topics are arranged sequentially from absolute zero to mastery. You only need to focus on your current active topic.
      </p>

      <div style="display:flex; gap:8px; overflow-x:auto; padding-bottom:10px; margin-bottom:20px;">
        <button class="level-tab-btn active" onclick="switchSubjectTrackTab('reas')">🧠 Reasoning (16)</button>
        <button class="level-tab-btn" onclick="switchSubjectTrackTab('math')">📐 Maths (17)</button>
        <button class="level-tab-btn" onclick="switchSubjectTrackTab('gs')">🌍 General Studies (11)</button>
        <button class="level-tab-btn" onclick="switchSubjectTrackTab('panchayat')">🌾 AP Panchayat (25)</button>
        <button class="level-tab-btn" onclick="switchSubjectTrackTab('endowment')">🛕 APPSC Endowment</button>
        <button class="level-tab-btn" onclick="switchSubjectTrackTab('ssc')">🏛️ SSC CGL Guide</button>
      </div>

      <div id="subject-track-content"></div>
    </div>
  `;

  renderSubjectTrackList("reas");
}

function switchSubjectTrackTab(trackKey) {
  document.querySelectorAll("#view-subjects .level-tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  if (window.event && window.event.target) window.event.target.classList.add("active");
  renderSubjectTrackList(trackKey);
}

function renderSubjectTrackList(trackKey) {
  const content = document.getElementById("subject-track-content");
  if (!content) return;

  if (trackKey === "reas") {
    content.innerHTML = `
      <h3 style="margin-bottom:14px; font-weight:700;">Phase 1: Reasoning Progression</h3>
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${window.REASONING_SYLLABUS.map((item, idx) => {
          const isDone = state.completedTopics[item.id];
          const isCurrent = idx === state.currentReasoningIndex;
          return `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:14px 18px; background-color:${isCurrent ? "var(--accent-primary-light)" : "var(--bg-card-subtle)"}; border:1px solid ${isCurrent ? "var(--accent-primary-border)" : "var(--border-color)"}; border-radius:var(--radius-md); flex-wrap:wrap; gap:10px;">
              <div>
                <strong style="font-size:1rem; color:var(--text-main);">${idx + 1}. ${item.title}</strong>
                <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">
                  📖 R.S. Aggarwal Topic: <strong>${item.rsAggarwalTopic}</strong>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:10px;">
                ${isDone ? `<span style="color:var(--accent-primary); font-weight:700; font-size:0.85rem;">✅ Completed</span>` : isCurrent ? `<span style="color:var(--accent-primary); font-weight:700; font-size:0.85rem;">📍 Current Task</span>` : `<span style="color:var(--text-light); font-size:0.85rem;">Upcoming</span>`}
                <button class="btn-secondary" style="padding:6px 14px; font-size:0.85rem;" onclick="jumpToTopic('${item.id}', 'reasoning', ${idx})">Study</button>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  } else if (trackKey === "math") {
    content.innerHTML = `
      <div class="maths-reassurance-banner">
        <span>🛡️</span>
        <div><strong>Maths Without Fear:</strong> Every topic is broken into 5 gradual levels from Understand to Basic to Medium. No rush!</div>
      </div>
      <h3 style="margin-bottom:14px; font-weight:700;">Quantitative Aptitude Order</h3>
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${window.MATHS_SYLLABUS.map((item, idx) => {
          const isDone = state.completedTopics[item.id];
          const isCurrent = idx === state.currentMathsIndex;
          return `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:14px 18px; background-color:${isCurrent ? "var(--accent-blue-light)" : "var(--bg-card-subtle)"}; border:1px solid ${isCurrent ? "var(--accent-blue-border)" : "var(--border-color)"}; border-radius:var(--radius-md); flex-wrap:wrap; gap:10px;">
              <div>
                <strong style="font-size:1rem; color:var(--text-main);">${idx + 1}. ${item.title}</strong>
                <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">
                  📺 NxtWave: <em>${item.nxtWaveVideoTitle}</em>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:10px;">
                ${isDone ? `<span style="color:var(--accent-primary); font-weight:700; font-size:0.85rem;">✅ Completed</span>` : isCurrent ? `<span style="color:var(--accent-blue); font-weight:700; font-size:0.85rem;">📍 Current Task</span>` : `<span style="color:var(--text-light); font-size:0.85rem;">Upcoming</span>`}
                <button class="btn-secondary" style="padding:6px 14px; font-size:0.85rem;" onclick="jumpToTopic('${item.id}', 'maths', ${idx})">Study</button>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  } else if (trackKey === "gs") {
    content.innerHTML = `
      <h3 style="margin-bottom:14px; font-weight:700;">General Studies Topics</h3>
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${window.GENERAL_STUDIES_SYLLABUS.map((item, idx) => {
          return `
            <div style="padding:14px 18px; background-color:var(--bg-card-subtle); border:1px solid var(--border-color); border-radius:var(--radius-md);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <strong style="font-size:1rem; color:var(--text-main);">${idx + 1}. ${item.title}</strong>
                <button class="btn-secondary" style="padding:6px 14px; font-size:0.85rem;" onclick="openLearnZeroForTopic('${item.id}', 'gs')">Read 5 Points & MCQs</button>
              </div>
              <p style="font-size:0.88rem; color:var(--text-muted);">${item.simpleExplanation}</p>
            </div>
          `;
        }).join("")}
      </div>
    `;
  } else if (trackKey === "panchayat") {
    content.innerHTML = `
      <h3 style="margin-bottom:14px; font-weight:700;">AP Panchayat Secretary (Part-B Rural Development)</h3>
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${window.PANCHAYAT_SECRETARY_SYLLABUS.map((item) => {
          return `
            <div style="padding:14px 18px; background-color:var(--bg-card-subtle); border:1px solid var(--border-color); border-radius:var(--radius-md);">
              <strong style="font-size:1rem; color:var(--text-main);">${item.title}</strong>
              <p style="font-size:0.88rem; color:var(--text-muted); margin-top:4px;">${item.desc}</p>
            </div>
          `;
        }).join("")}
      </div>
    `;
  } else if (trackKey === "endowment") {
    content.innerHTML = `
      <h3 style="margin-bottom:14px; font-weight:700;">APPSC Endowment Officer Grade-III Track</h3>
      <div class="card" style="margin-bottom:16px;">
        <h4 style="color:var(--accent-primary); font-weight:700; margin-bottom:10px;">Paper-I: General Studies & Mental Ability</h4>
        <ul style="margin-left:20px; line-height:1.8; color:var(--text-main);">
          ${window.APPSC_ENDOWMENT_SYLLABUS.paper1.map((p) => `<li><strong>${p.title}:</strong> ${p.desc}</li>`).join("")}
        </ul>
      </div>
      <div class="card">
        <h4 style="color:var(--accent-amber); font-weight:700; margin-bottom:10px;">Paper-II: Hindu Philosophy & Temple Administration</h4>
        <ul style="margin-left:20px; line-height:1.8; color:var(--text-main);">
          ${window.APPSC_ENDOWMENT_SYLLABUS.paper2.map((p) => `<li><strong>${p.title}:</strong> ${p.desc}</li>`).join("")}
        </ul>
      </div>
    `;
  } else if (trackKey === "ssc") {
    content.innerHTML = `
      <div class="card" style="background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); border-color:var(--accent-primary-border);">
        <h3 style="font-weight:800; color:var(--accent-primary); margin-bottom:10px;">🏛️ SSC CGL — Calm Long-Term Strategy</h3>
        <p style="font-size:1rem; color:var(--text-main); margin-bottom:16px; line-height:1.6;">
          <strong>"${window.SSC_CGL_CALM_GUIDE.philosophy}"</strong>
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:14px; margin:20px 0;">
          ${window.SSC_CGL_CALM_GUIDE.corePillars.map((p) => `
            <div style="background-color:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:16px;">
              <strong style="color:var(--text-main); font-size:1rem;">${p.name}</strong>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-top:6px;">${p.focus}</p>
            </div>
          `).join("")}
        </div>
        <p style="font-size:0.92rem; color:var(--accent-primary); font-weight:600;">
          💡 ${window.SSC_CGL_CALM_GUIDE.calmAdvice}
        </p>
      </div>
    `;
  }
}

function jumpToTopic(topicId, trackType, index) {
  if (trackType === "reasoning") {
    state.currentReasoningIndex = index;
    state.activeTrack = "reasoning";
  } else if (trackType === "maths") {
    state.currentMathsIndex = index;
    state.activeTrack = "maths";
  }
  state.taskChecklist = { video: false, basicEx: false, mcqs: false, assessment: false, rsAggarwal: false };
  saveState();
  switchTab("today");
}
// PRACTICE VIEW
function renderPracticeView() {
  const container = document.getElementById("view-practice");
  if (!container) return;

  const allTopics = [
    ...window.REASONING_SYLLABUS.map((t) => ({ id: t.id, title: `🧠 Reasoning: ${t.title}`, type: "reas" })),
    ...window.MATHS_SYLLABUS.map((t) => ({ id: t.id, title: `📐 Maths: ${t.title}`, type: "math" })),
    ...window.GENERAL_STUDIES_SYLLABUS.map((t) => ({ id: t.id, title: `🌍 GS: ${t.title}`, type: "gs" }))
  ];

  container.innerHTML = `
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:20px;">
        <h2 class="card-title" style="margin-bottom:0;">📝 Zero-to-Hero Interactive Practice</h2>
        <div style="display:flex; gap:10px; align-items:center;">
          <label style="font-size:0.9rem; font-weight:600;">Select Topic:</label>
          <select id="practice-topic-selector" onchange="loadPracticeTopic(this.value)" style="padding:8px 12px; border:1px solid var(--border-color); border-radius:var(--radius-sm); font-size:0.95rem; font-weight:600;">
            ${allTopics.map((t) => `<option value="${t.id}">${t.title}</option>`).join("")}
          </select>
        </div>
      </div>

      <div id="practice-content-area"></div>
    </div>
  `;

  const initialTopicId = allTopics[0].id;
  loadPracticeTopic(initialTopicId);
}

function loadPracticeTopic(topicId) {
  const area = document.getElementById("practice-content-area");
  if (!area) return;

  const reasTopic = window.REASONING_SYLLABUS.find((t) => t.id === topicId);
  const mathTopic = window.MATHS_SYLLABUS.find((t) => t.id === topicId);
  const gsTopic = window.GENERAL_STUDIES_SYLLABUS.find((t) => t.id === topicId);

  if (reasTopic) {
    const lz = reasTopic.learnFromZero;
    area.innerHTML = `
      <div class="learn-zero-section">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h3 style="font-size:1.3rem; font-weight:800; color:var(--accent-purple);">🧠 ${reasTopic.title} — Learn from Zero</h3>
          <button class="btn-confusion" onclick="openConfusionModal('${reasTopic.title}')">😕 I Don't Understand</button>
        </div>

        <div class="zero-block">
          <div class="zero-block-title">💡 What is this?</div>
          <div class="zero-block-content">${lz.whatIsIt}</div>
        </div>

        <div class="zero-block">
          <div class="zero-block-title">🎯 Why is it used?</div>
          <div class="zero-block-content">${lz.whyUsed}</div>
        </div>

        <div class="zero-block">
          <div class="zero-block-title">🧩 Simple Explanation</div>
          <div class="zero-block-content">${lz.simpleExplanation}</div>
        </div>

        <div class="zero-block">
          <div class="zero-block-title">🌱 Very Easy Example</div>
          <div class="zero-block-content">${lz.veryEasyExample}</div>
        </div>

        <div class="zero-block">
          <div class="zero-block-title">🪜 Step-by-Step Solved Problem</div>
          <div class="zero-block-content">
            <strong>Problem:</strong> ${lz.stepByStepExample.problem}
            <ol style="margin-left:20px; margin-top:8px; line-height:1.7;">
              ${lz.stepByStepExample.steps.map((s) => `<li>${s}</li>`).join("")}
            </ol>
          </div>
        </div>

        <div class="zero-block" style="border:none;">
          <div class="zero-block-title">⚠️ Common Trap to Avoid</div>
          <div class="zero-block-content" style="color:#b45309; font-weight:600;">${lz.commonTraps}</div>
        </div>
      </div>

      <h4 style="font-size:1.1rem; font-weight:700; margin:24px 0 14px;">🎯 Interactive Practice Questions</h4>
      <div id="interactive-quiz-container">
        ${renderQuizQuestions(reasTopic.practiceQuestions, reasTopic.title)}
      </div>
    `;
  } else if (mathTopic) {
    const mwf = mathTopic.mathsWithoutFear;
    const curLevel = state.mathCurrentLevel || 2;
    const suffix = getLevelSuffix(curLevel);
    const levelKey = `level${curLevel}_${suffix}`;
    const levelObj = mwf.levels[levelKey] || mwf.levels.level2_veryEasy || mwf.levels.level1_understand;

    area.innerHTML = `
      <div class="maths-reassurance-banner">
        <span>🛡️</span>
        <div><strong>Maths Without Fear:</strong> "${mwf.reassurance}"</div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px;">
        <h3 style="font-size:1.3rem; font-weight:800; color:var(--accent-blue);">📐 ${mathTopic.title}</h3>
        <button class="btn-confusion" onclick="openConfusionModal('${mathTopic.title}')">😕 I Don't Understand</button>
      </div>

      <div class="maths-levels-bar">
        <button class="level-tab-btn ${state.mathCurrentLevel === 1 ? "active" : ""}" onclick="setMathLevel(1, '${mathTopic.id}')">Level 1: Understand</button>
        <button class="level-tab-btn ${state.mathCurrentLevel === 2 ? "active" : ""}" onclick="setMathLevel(2, '${mathTopic.id}')">Level 2: Very Easy</button>
        <button class="level-tab-btn ${state.mathCurrentLevel === 3 ? "active" : ""}" onclick="setMathLevel(3, '${mathTopic.id}')">Level 3: Basic</button>
        <button class="level-tab-btn ${state.mathCurrentLevel === 4 ? "active" : ""}" onclick="setMathLevel(4, '${mathTopic.id}')">Level 4: Medium</button>
        <button class="level-tab-btn ${state.mathCurrentLevel === 5 ? "active" : ""}" onclick="setMathLevel(5, '${mathTopic.id}')">Level 5: Hard (Optional)</button>
      </div>

      <div class="card" style="background-color:var(--bg-card-subtle); margin-bottom:20px;">
        <h4 style="font-weight:700; color:var(--accent-blue); margin-bottom:10px;">${levelObj.title}</h4>
        ${levelObj.content ? `<p style="line-height:1.6;">${levelObj.content}</p>` : ""}
        ${
          levelObj.problem
            ? `
          <div style="margin-top:10px;">
            <strong>Example:</strong> ${levelObj.problem}
            <ul style="margin-left:20px; margin-top:8px; line-height:1.7;">
              ${levelObj.stepByStep.map((s) => `<li>${s}</li>`).join("")}
            </ul>
          </div>
        `
            : ""
        }
      </div>

      <h4 style="font-size:1.1rem; font-weight:700; margin:24px 0 14px;">🎯 Adaptive Maths Practice</h4>
      <div id="interactive-quiz-container">
        ${renderQuizQuestions(mathTopic.practiceQuestions, mathTopic.title)}
      </div>
    `;
  } else if (gsTopic) {
    area.innerHTML = `
      <div class="card">
        <h3 style="font-size:1.3rem; font-weight:800; color:var(--accent-amber); margin-bottom:8px;">🌍 ${gsTopic.title}</h3>
        <p style="font-size:1rem; color:var(--text-main); margin-bottom:18px;">${gsTopic.simpleExplanation}</p>

        <h4 style="font-weight:700; margin-bottom:10px;">📌 5 Key High-Yield Points:</h4>
        <div style="background-color:var(--bg-card-subtle); padding:16px 20px; border-radius:var(--radius-md); margin-bottom:24px;">
          <ul style="margin-left:20px; line-height:1.8; color:var(--text-main);">
            ${gsTopic.keyPoints.map((p) => `<li>${p}</li>`).join("")}
          </ul>
        </div>

        <h4 style="font-weight:700; margin-bottom:14px;">🎯 Quick Practice MCQs:</h4>
        <div id="interactive-quiz-container">
          ${renderQuizQuestions(gsTopic.mcqs, gsTopic.title)}
        </div>
      </div>
    `;
  }
}

function getLevelSuffix(lvl) {
  if (lvl === 1) return "understand";
  if (lvl === 2) return "veryEasy";
  if (lvl === 3) return "basic";
  if (lvl === 4) return "medium";
  return "hard";
}

function setMathLevel(levelNum, topicId) {
  state.mathCurrentLevel = levelNum;
  saveState();
  loadPracticeTopic(topicId);
}

function renderQuizQuestions(questions, topicName) {
  if (!questions || questions.length === 0) {
    return `<p style="color:var(--text-muted);">No practice questions loaded for this topic.</p>`;
  }

  return questions.map((q, qIdx) => {
    return `
      <div class="quiz-question-card" id="quiz-card-${qIdx}">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted);">Question ${qIdx + 1}</span>
          <button class="btn-confusion" style="padding:4px 10px; font-size:0.8rem;" onclick="openConfusionModal('${topicName}', '${encodeURIComponent(q.question)}')">😕 Confused?</button>
        </div>
        <p class="question-text">${q.question}</p>
        <div class="options-list">
          ${q.options.map((opt, oIdx) => `
            <button class="option-btn" id="opt-btn-${qIdx}-${oIdx}" onclick="handleQuizAnswer(${qIdx}, ${oIdx}, ${q.correctIndex}, '${encodeURIComponent(q.explanation || "")}', '${encodeURIComponent(q.question)}', '${topicName}')">
              <span>${String.fromCharCode(65 + oIdx)}.</span>
              <span>${opt}</span>
            </button>
          `).join("")}
        </div>
        <div id="quiz-feedback-${qIdx}" class="quiz-feedback" style="display:none;"></div>
      </div>
    `;
  }).join("");
}

function handleQuizAnswer(qIdx, selectedIdx, correctIdx, encExp, encQ, topicName) {
  const feedback = document.getElementById(`quiz-feedback-${qIdx}`);
  const explanation = decodeURIComponent(encExp);
  const question = decodeURIComponent(encQ);

  document.querySelectorAll(`[id^="opt-btn-${qIdx}-"]`).forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.classList.add("correct");
    } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
      btn.classList.add("wrong");
    }
  });

  state.stats.questionsAnswered++;

  if (selectedIdx === correctIdx) {
    state.stats.questionsCorrect++;
    playGentleChime();
    feedback.className = "quiz-feedback success";
    feedback.innerHTML = `
      <strong>✅ Excellent! Correct answer.</strong><br/>
      ${explanation}
    `;
  } else {
    feedback.className = "quiz-feedback retry";
    feedback.innerHTML = `
      <strong>💡 Almost! Let's understand why:</strong><br/>
      ${explanation}<br/><br/>
      <button class="btn-secondary" style="font-size:0.82rem; padding:6px 12px; margin-top:6px;" onclick="logQuizMistake('${encodeURIComponent(question)}', '${topicName}')">
        ➕ Save to My Mistake Book
      </button>
    `;

    if (state.mathCurrentLevel > 2) {
      state.mathCurrentLevel--;
    }
  }

  feedback.style.display = "block";
  saveState();
}

function logQuizMistake(encQ, topicName) {
  const question = decodeURIComponent(encQ);
  state.mistakeBook.push({
    id: `m-${Date.now()}`,
    topic: topicName,
    question: question,
    myAnswer: "Selected incorrect option",
    correctAnswer: "Refer to step-by-step method",
    mistakeType: "Concept mistake",
    reason: "Practiced during zero-to-hero quiz.",
    correctMethod: "Review fundamental rules and re-attempt calmly.",
    date: new Date().toISOString().split("T")[0]
  });
  saveState();
  alert("Saved to My Mistake Book! You can review it anytime in the ❌ Mistake Book tab.");
}
// REVISION VIEW (Spaced Repetition)
function renderRevisionView() {
  const container = document.getElementById("view-revision");
  if (!container) return;

  container.innerHTML = `
    <div class="card">
      <h2 class="card-title">🔁 Spaced Repetition Revision</h2>
      <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:20px;">
        Automatic calm schedule: Day 1 → Day 3 → Day 7 → Day 14 → Day 30. Short 10-minute revisions help lock concepts into permanent memory.
      </p>

      <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:24px;">
        ${
          state.revisionQueue.length === 0
            ? `<p style="color:var(--text-muted);">No revisions due right now. Enjoy your calm progress!</p>`
            : state.revisionQueue.map((rev, idx) => `
              <div style="background-color:var(--bg-card-subtle); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:16px 20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div>
                  <strong style="font-size:1.05rem; color:var(--text-main);">${rev.title}</strong>
                  <span style="background-color:var(--accent-primary-light); color:var(--accent-primary); padding:2px 8px; border-radius:var(--radius-full); font-size:0.8rem; font-weight:700; margin-left:8px;">${rev.subject}</span>
                  <div style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">
                    Scheduled Interval: <strong>${rev.intervalDays} Day(s)</strong> | Due: ${rev.dueDate}
                  </div>
                </div>
                <div style="display:flex; gap:8px;">
                  <button class="btn-secondary" style="padding:8px 16px; font-size:0.88rem;" onclick="start10MinRevision('${rev.topicId}')">
                    ⏱ 10-Min Rapid Review
                  </button>
                  <button class="btn-secondary" style="padding:8px 16px; font-size:0.88rem; background-color:var(--accent-primary-light); color:var(--accent-primary); border-color:var(--accent-primary-border);" onclick="completeRevision(${idx})">
                    ✅ Mark Done
                  </button>
                </div>
              </div>
            `).join("")
        }
      </div>

      <div class="card" style="background-color:#f0fdf4; border-color:var(--accent-primary-border);">
        <h3 style="color:var(--accent-primary); font-weight:700; margin-bottom:8px;">💡 Structure of a 10-Minute Rapid Revision:</h3>
        <ol style="margin-left:20px; line-height:1.8; color:var(--text-main);">
          <li><strong>3 Rules:</strong> Read the core shortcut formulas.</li>
          <li><strong>3 Questions:</strong> Solve 3 quick mental examples.</li>
          <li><strong>1 Mini Test:</strong> Verify accuracy without a timer.</li>
        </ol>
      </div>
    </div>
  `;
}

function completeRevision(index) {
  const rev = state.revisionQueue[index];
  if (!rev) return;

  let nextInterval = 3;
  if (rev.intervalDays === 1) nextInterval = 3;
  else if (rev.intervalDays === 3) nextInterval = 7;
  else if (rev.intervalDays === 7) nextInterval = 14;
  else if (rev.intervalDays === 14) nextInterval = 30;
  else nextInterval = 60;

  rev.intervalDays = nextInterval;
  rev.dueDate = new Date(Date.now() + nextInterval * 86400000).toISOString().split("T")[0];

  saveState();
  playGentleChime();
  alert(`Revision marked complete! Next scheduled review in ${nextInterval} days. 🌱`);
  renderRevisionView();
}

function start10MinRevision(topicId) {
  openLearnZeroForTopic(topicId);
}

// MISTAKE BOOK VIEW
function renderMistakesView() {
  const container = document.getElementById("view-mistakes");
  if (!container) return;

  const calcErrors = state.mistakeBook.filter((m) => m.mistakeType === "Calculation mistake").length;
  const conceptErrors = state.mistakeBook.filter((m) => m.mistakeType === "Concept mistake").length;

  let diagnosticMsg = "Your mistakes are safe checkpoints for learning. Keep noting them down calmly.";
  if (calcErrors >= 3) {
    diagnosticMsg = `💡 <strong>Diagnostic insight:</strong> You made ${calcErrors} calculation mistakes recently. Let's solve mental math drills slowly. Speed comes later!`;
  } else if (conceptErrors >= 3) {
    diagnosticMsg = `💡 <strong>Diagnostic insight:</strong> You have ${conceptErrors} concept check entries. Re-visiting the Level 1 (Understand) section will build crystal clarity.`;
  }

  container.innerHTML = `
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:20px;">
        <h2 class="card-title" style="margin-bottom:0;">❌ My Mistake Book</h2>
        <button class="btn-start-task" style="padding:8px 18px; font-size:0.92rem;" onclick="showAddMistakeForm()">
          ➕ Add New Mistake
        </button>
      </div>

      <div class="smart-insight-box">
        <span style="font-size:1.6rem;">🌱</span>
        <div style="font-size:0.95rem; line-height:1.5;">${diagnosticMsg}</div>
      </div>

      <!-- Add Mistake Modal / Inline Form -->
      <div id="add-mistake-container" style="display:none; background-color:var(--bg-card-subtle); padding:20px; border-radius:var(--radius-md); border:1px solid var(--border-color); margin-bottom:24px;">
        <h4 style="font-weight:700; margin-bottom:14px;">Log a Learning Checkpoint</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:14px;">
          <div>
            <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:4px;">Topic Name:</label>
            <input type="text" id="mistake-topic-in" placeholder="e.g. Ranking" style="width:100%; padding:8px 12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
          </div>
          <div>
            <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:4px;">Mistake Category:</label>
            <select id="mistake-type-in" style="width:100%; padding:8px 12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
              <option value="Concept mistake">Concept mistake</option>
              <option value="Calculation mistake">Calculation mistake</option>
              <option value="Misread question">Misread question</option>
              <option value="Forgot rule">Forgot rule</option>
              <option value="Time problem">Time problem</option>
              <option value="Guess">Guess</option>
            </select>
          </div>
        </div>
        <div style="margin-bottom:12px;">
          <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:4px;">Question:</label>
          <textarea id="mistake-question-in" rows="2" placeholder="Write or paste the question..." style="width:100%; padding:8px 12px; border:1px solid var(--border-color); border-radius:var(--radius-sm); font-family:inherit;"></textarea>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:12px;">
          <div>
            <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:4px;">My Answer:</label>
            <input type="text" id="mistake-myans-in" placeholder="What I marked" style="width:100%; padding:8px 12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
          </div>
          <div>
            <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:4px;">Correct Answer:</label>
            <input type="text" id="mistake-correctans-in" placeholder="Correct answer" style="width:100%; padding:8px 12px; border:1px solid var(--border-color); border-radius:var(--radius-sm);">
          </div>
        </div>
        <div style="margin-bottom:16px;">
          <label style="display:block; font-size:0.85rem; font-weight:600; margin-bottom:4px;">Correct Method / Why I got it wrong:</label>
          <textarea id="mistake-method-in" rows="2" placeholder="Step-by-step correct solution..." style="width:100%; padding:8px 12px; border:1px solid var(--border-color); border-radius:var(--radius-sm); font-family:inherit;"></textarea>
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn-start-task" style="padding:8px 20px; font-size:0.9rem;" onclick="saveNewMistake()">Save Entry</button>
          <button class="btn-secondary" style="padding:8px 20px; font-size:0.9rem;" onclick="hideAddMistakeForm()">Cancel</button>
        </div>
      </div>

      <!-- Mistake Entries List -->
      <div style="display:flex; flex-direction:column; gap:14px;">
        ${
          state.mistakeBook.length === 0
            ? `<p style="color:var(--text-muted);">Your mistake notebook is currently empty.</p>`
            : state.mistakeBook.map((m, idx) => `
              <div class="mistake-card">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span class="mistake-badge">${m.mistakeType}</span>
                  <span style="font-size:0.8rem; color:var(--text-muted);">${m.date}</span>
                </div>
                <h4 style="font-size:1.05rem; font-weight:700; margin-bottom:6px;">${m.topic}</h4>
                <p style="font-size:0.95rem; color:var(--text-main); margin-bottom:8px;">${m.question}</p>
                <div style="display:flex; gap:16px; font-size:0.88rem; margin-bottom:8px; flex-wrap:wrap;">
                  <span style="color:#dc2626;"><strong>My Answer:</strong> ${m.myAnswer}</span>
                  <span style="color:#15803d;"><strong>Correct Answer:</strong> ${m.correctAnswer}</span>
                </div>
                <div style="background-color:var(--bg-card-subtle); padding:10px 14px; border-radius:var(--radius-sm); font-size:0.88rem; line-height:1.5;">
                  <strong>Correct Method:</strong> ${m.correctMethod}
                </div>
                <div style="margin-top:10px; display:flex; justify-content:flex-end;">
                  <button class="btn-secondary" style="font-size:0.8rem; padding:4px 10px; color:#dc2626;" onclick="deleteMistake(${idx})">🗑 Remove</button>
                </div>
              </div>
            `).join("")
        }
      </div>
    </div>
  `;
}

function showAddMistakeForm() {
  const f = document.getElementById("add-mistake-container");
  if (f) f.style.display = "block";
}

function hideAddMistakeForm() {
  const f = document.getElementById("add-mistake-container");
  if (f) f.style.display = "none";
}

function saveNewMistake() {
  const topic = document.getElementById("mistake-topic-in").value.trim() || "General Practice";
  const type = document.getElementById("mistake-type-in").value;
  const q = document.getElementById("mistake-question-in").value.trim() || "Question summary";
  const myAns = document.getElementById("mistake-myans-in").value.trim() || "Incorrect";
  const corrAns = document.getElementById("mistake-correctans-in").value.trim() || "Correct";
  const method = document.getElementById("mistake-method-in").value.trim() || "Solve step by step.";

  state.mistakeBook.unshift({
    id: `m-${Date.now()}`,
    topic: topic,
    mistakeType: type,
    question: q,
    myAnswer: myAns,
    correctAnswer: corrAns,
    correctMethod: method,
    date: new Date().toISOString().split("T")[0]
  });

  saveState();
  playGentleChime();
  renderMistakesView();
}

function deleteMistake(idx) {
  state.mistakeBook.splice(idx, 1);
  saveState();
  renderMistakesView();
}

// PROGRESS VIEW
function renderProgressView() {
  const container = document.getElementById("view-progress");
  if (!container) return;

  const totalReas = window.REASONING_SYLLABUS.length;
  const doneReas = Object.keys(state.completedTopics).filter((k) => k.startsWith("reas-")).length;
  const reasPct = Math.round((doneReas / totalReas) * 100);

  const totalMath = window.MATHS_SYLLABUS.length;
  const doneMath = Object.keys(state.completedTopics).filter((k) => k.startsWith("math-")).length;
  const mathPct = Math.round((doneMath / totalMath) * 100);

  const totalGS = window.GENERAL_STUDIES_SYLLABUS.length;
  const doneGS = Object.keys(state.completedTopics).filter((k) => k.startsWith("gs-")).length;
  const gsPct = Math.round((doneGS / totalGS) * 100);

  const totalPR = window.PANCHAYAT_SECRETARY_SYLLABUS.length;
  const donePR = Object.keys(state.completedTopics).filter((k) => k.startsWith("pr-")).length;
  const prPct = Math.round((donePR / totalPR) * 100);

  const accuracy = state.stats.questionsAnswered > 0 ? Math.round((state.stats.questionsCorrect / state.stats.questionsAnswered) * 100) : 100;

  container.innerHTML = `
    <div class="card">
      <h2 class="card-title">📊 Measurable Foundation Progress</h2>
      <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:20px;">
        Track genuine topic understanding. No rankings, no stress, just steady skill-building.
      </p>

      <div class="progress-track">
        <div class="progress-label-bar">
          <span>🧠 Phase 1: Reasoning</span>
          <span>${doneReas} / ${totalReas} topics (${reasPct}%)</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width:${reasPct}%; background:linear-gradient(90deg, #a855f7 0%, #7c3aed 100%);"></div>
        </div>
      </div>

      <div class="progress-track">
        <div class="progress-label-bar">
          <span>📐 Maths Without Fear</span>
          <span>${doneMath} / ${totalMath} topics (${mathPct}%)</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width:${mathPct}%; background:linear-gradient(90deg, #38bdf8 0%, #0284c7 100%);"></div>
        </div>
      </div>

      <div class="progress-track">
        <div class="progress-label-bar">
          <span>🌍 General Studies</span>
          <span>${doneGS} / ${totalGS} topics (${gsPct}%)</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width:${gsPct}%; background:linear-gradient(90deg, #fbbf24 0%, #d97706 100%);"></div>
        </div>
      </div>

      <div class="progress-track">
        <div class="progress-label-bar">
          <span>🌾 AP Panchayat Secretary (Part-B)</span>
          <span>${donePR} / ${totalPR} topics (${prPct}%)</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width:${prPct}%;"></div>
        </div>
      </div>

      <div class="weekly-grid">
        <div class="stat-box">
          <div class="stat-number">${Object.keys(state.completedTopics).length}</div>
          <div class="stat-label">Topics Completed</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">${state.stats.questionsAnswered}</div>
          <div class="stat-label">Questions Practiced</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">${accuracy}%</div>
          <div class="stat-label">Practice Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">${state.revisionQueue.length}</div>
          <div class="stat-label">Revision Checkpoints</div>
        </div>
      </div>

      <div class="card" style="background-color:var(--bg-card-subtle); margin-top:24px;">
        <h3 style="font-weight:700; color:var(--text-main); margin-bottom:10px;">📅 My Week Review</h3>
        <p style="font-size:0.92rem; color:var(--text-muted); margin-bottom:14px;">A calm snapshot of your last 7 days of learning:</p>
        <ul style="margin-left:20px; line-height:1.8; font-size:0.95rem; color:var(--text-main);">
          <li>Completed: <strong>${Object.keys(state.completedTopics).length} modules</strong> with NxtWave learning loop.</li>
          <li>Mistake book entries logged: <strong>${state.mistakeBook.length} items</strong>.</li>
          <li>Current study streak mindset: <strong>Consistent & Capable</strong>.</li>
        </ul>

        <h4 style="font-weight:700; color:var(--accent-primary); margin-top:18px; margin-bottom:8px;">🎯 Next Priorities (Top 3 Only):</h4>
        <ol style="margin-left:20px; line-height:1.8; font-size:0.95rem; color:var(--text-main);">
          <li>Master next Reasoning topic: <strong>${(window.REASONING_SYLLABUS[state.currentReasoningIndex] || {}).title || "Directions"}</strong>.</li>
          <li>Practice Level 1 & 2 in Maths: <strong>${(window.MATHS_SYLLABUS[state.currentMathsIndex] || {}).title || "Number Systems"}</strong>.</li>
          <li>Complete 1 scheduled 10-minute spaced revision.</li>
        </ol>
      </div>
    </div>
  `;
}

// SETTINGS VIEW
function renderSettingsView() {
  const container = document.getElementById("view-settings");
  if (!container) return;

  container.innerHTML = `
    <div class="card">
      <h2 class="card-title">⚙️ Preferences & Study Tools</h2>

      <div style="display:flex; flex-direction:column; gap:20px; margin-top:20px;">
        <div style="padding:16px; background-color:var(--bg-card-subtle); border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <strong style="font-size:1rem; display:block; margin-bottom:6px;">🎧 Calm Ambient Sound Player</strong>
          <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:12px;">Synthesizes soothing background focus audio via Web Audio API:</p>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn-secondary ${state.ambientSound === "off" ? "active" : ""}" onclick="setAmbientSound('off')">Off</button>
            <button class="btn-secondary ${state.ambientSound === "rain" ? "active" : ""}" onclick="setAmbientSound('rain')">🌧️ Gentle Rain</button>
            <button class="btn-secondary ${state.ambientSound === "brown" ? "active" : ""}" onclick="setAmbientSound('brown')">🌊 Brown Noise (Deep Calm)</button>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; padding:16px; background-color:var(--bg-card-subtle); border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <div>
            <strong style="font-size:1rem;">🔔 Completion Chime</strong>
            <p style="font-size:0.85rem; color:var(--text-muted);">Play a soft gentle bell when tasks and quizzes are completed.</p>
          </div>
          <input type="checkbox" ${state.soundEnabled ? "checked" : ""} onchange="toggleSound(this.checked)" style="width:20px; height:20px; accent-color:var(--accent-primary);">
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; padding:16px; background-color:var(--bg-card-subtle); border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <div>
            <strong style="font-size:1rem;">🌙 Dark Theme</strong>
            <p style="font-size:0.85rem; color:var(--text-muted);">Easier on the eyes during late night study sessions.</p>
          </div>
          <input type="checkbox" ${state.darkTheme ? "checked" : ""} onchange="toggleDarkTheme(this.checked)" style="width:20px; height:20px; accent-color:var(--accent-primary);">
        </div>

        <div style="padding:16px; background-color:var(--bg-card-subtle); border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <strong style="font-size:1rem; display:block; margin-bottom:6px;">💾 Data Backup & Restore</strong>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">Export all your study history, mistake logs, and revision queue to a JSON file:</p>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn-secondary" onclick="exportDataJSON()">📥 Export Backup (.json)</button>
            <button class="btn-secondary" onclick="document.getElementById('import-file-input').click()">📤 Restore from Backup</button>
            <input type="file" id="import-file-input" accept=".json" style="display:none;" onchange="importDataJSON(event)">
            <button class="btn-secondary" onclick="window.print()">🖨️ Print Study Summary</button>
          </div>
        </div>

        <div style="padding:16px; background-color:#fef2f2; border-radius:var(--radius-md); border:1px solid #fecaca;">
          <strong style="font-size:1rem; color:#dc2626; display:block; margin-bottom:6px;">⚠️ Reset Progress</strong>
          <p style="font-size:0.85rem; color:#991b1b; margin-bottom:12px;">Reset all completed topics and return to Day 1 fresh start:</p>
          <button class="btn-secondary" style="background-color:#fee2e2; color:#b91c1c; border-color:#fca5a5;" onclick="resetAllProgress()">Reset Everything</button>
        </div>
      </div>
    </div>
  `;
}

function toggleSound(enabled) {
  state.soundEnabled = enabled;
  saveState();
}

function toggleDarkTheme(enabled) {
  state.darkTheme = enabled;
  document.body.classList.toggle("dark-theme", enabled);
  saveState();
}

function exportDataJSON() {
  const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", jsonStr);
  downloadAnchor.setAttribute("download", `my_exam_journey_backup_${new Date().toISOString().split("T")[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importDataJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      state = { ...defaultState, ...imported };
      saveState();
      alert("Backup successfully restored! 🌱");
      location.reload();
    } catch (err) {
      alert("Invalid backup JSON file.");
    }
  };
  reader.readAsText(file);
}

function resetAllProgress() {
  if (confirm("Are you sure you want to reset your study progress to a fresh start?")) {
    state = { ...defaultState };
    saveState();
    location.reload();
  }
}

// Initialization on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  if (state.darkTheme) {
    document.body.classList.add("dark-theme");
  }
  switchTab(state.activeTab || "today");
});
