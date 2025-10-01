// Questions data
const questions = [
  {
    left: "Know the absolute truth about one historical mystery",
    right: "Have the ability to accurately predict one future event of your choosing",
    category: "philosophical"
  },
  {
    left: "Live in a world where you can feel others' emotions intensely",
    right: "Live in a world where you can completely control your own emotions",
    category: "philosophical"
  },
  {
    left: "Have the power to end world hunger but remain unknown",
    right: "Become world famous but unable to make significant positive change",
    category: "ethical"
  },
  {
    left: "Experience life as every person who ever lived for one day each",
    right: "Live your current life 1000 times with full memory of each iteration",
    category: "philosophical"
  },
  {
    left: "Always know when someone is lying to you",
    right: "Never be caught in a lie yourself",
    category: "ethical"
  },
  {
    left: "Have unlimited wealth but never feel satisfied",
    right: "Live modestly but always feel content and fulfilled",
    category: "philosophical"
  },
  {
    left: "Be able to speak to animals but they always complain",
    right: "Be able to speak all human languages but forget your native tongue",
    category: "superpowers"
  },
  {
    left: "Live in a utopia where everything is perfect but predictable",
    right: "Live in a world with hardships but unlimited potential for growth",
    category: "philosophical"
  },
  {
    left: "Have the ability to relive any moment from your past",
    right: "Have the ability to skip forward to any moment in your future",
    category: "lifestyle"
  },
  {
    left: "Know your purpose in life but not how to achieve it",
    right: "Achieve great things but never understand why you're doing them",
    category: "philosophical"
  },
  {
    left: "Live forever with the possibility of immense suffering",
    right: "Live a normal lifespan with guaranteed happiness",
    category: "philosophical"
  },
  {
    left: "Have all your questions about the universe answered but never share them",
    right: "Discover one truth that changes humanity forever",
    category: "philosophical"
  },
  {
    left: "Be the smartest person in a world of average intelligence",
    right: "Be average in a world of geniuses",
    category: "lifestyle"
  },
  {
    left: "Save one person you love from certain death",
    right: "Save 100 strangers you'll never meet",
    category: "ethical"
  },
  {
    left: "Experience unimaginable beauty for one moment",
    right: "Experience moderate beauty continuously for your entire life",
    category: "philosophical"
  },
  {
    left: "Have perfect memory of everything you've ever learned",
    right: "Have the ability to instantly master any new skill for 24 hours",
    category: "superpowers"
  },
  {
    left: "Live in a world where everyone tells the brutal truth",
    right: "Live in a world where everyone tells kind lies",
    category: "ethical"
  },
  {
    left: "Be completely free but utterly alone",
    right: "Be deeply connected to others but with significant restrictions",
    category: "philosophical"
  },
  {
    left: "Have the power to change one law globally",
    right: "Have the power to change one person's mind about anything",
    category: "ethical"
  },
  {
    left: "Experience the highest highs and lowest lows of human emotion",
    right: "Experience only moderate, stable emotions throughout life",
    category: "philosophical"
  },
  {
    left: "Know the date of your death",
    right: "Know the cause of your death",
    category: "philosophical"
  },
  {
    left: "Have total control over your dreams every night",
    right: "Never need to sleep but miss out on dreams entirely",
    category: "superpowers"
  },
  {
    left: "Be able to cure any disease but age twice as fast",
    right: "Be immune to all diseases but unable to help others",
    category: "ethical"
  },
  {
    left: "Live in a world with no art but perfect justice",
    right: "Live in a world with incredible art but rampant injustice",
    category: "philosophical"
  },
  {
    left: "Have infinite time but finite resources",
    right: "Have infinite resources but finite time",
    category: "philosophical"
  },
  {
    left: "Be reincarnated with full memory of your past life",
    right: "Live one very long life with no memory of anything before age 20",
    category: "philosophical"
  },
  {
    left: "Have the power to make anyone fall in love with you",
    right: "Have the power to make anyone forget you completely",
    category: "superpowers"
  },
  {
    left: "Experience perfect happiness for one year then return to normal",
    right: "Experience slightly above-average happiness for your entire life",
    category: "philosophical"
  },
  {
    left: "Be able to change your past but lose all your current relationships",
    right: "Keep your past as is and maintain all your current relationships",
    category: "lifestyle"
  },
  {
    left: "Have technology advance 100 years overnight with chaos",
    right: "Have technology progress slowly with stability",
    category: "philosophical"
  },
  {
    left: "Be famous for something you didn't do",
    right: "Accomplish something incredible but receive no recognition",
    category: "ethical"
  },
  {
    left: "Have your ideal career but terrible work-life balance",
    right: "Have a mediocre job with perfect work-life balance",
    category: "lifestyle"
  },
  {
    left: "Know every language that ever existed",
    right: "Be able to communicate telepathically with anyone",
    category: "superpowers"
  },
  {
    left: "Live in a world where everyone is exactly equal",
    right: "Live in a world where inequality exists but so does exceptional achievement",
    category: "philosophical"
  },
  {
    left: "Have the ability to see 10 seconds into the future constantly",
    right: "Have the ability to pause time for 10 seconds once per day",
    category: "superpowers"
  },
  {
    left: "Be able to end suffering in the world but also eliminate all pleasure",
    right: "Keep the world as is with both suffering and pleasure",
    category: "ethical"
  },
  {
    left: "Have your consciousness transferred to an immortal robot body",
    right: "Remain human but have your lifespan doubled",
    category: "philosophical"
  },
  {
    left: "Experience life from the perspective of every animal species for a day",
    right: "Experience life as every profession for a week each",
    category: "lifestyle"
  },
  {
    left: "Have access to infinite knowledge but no wisdom to use it",
    right: "Have infinite wisdom but limited knowledge",
    category: "philosophical"
  },
  {
    left: "Live in a world where everyone has superpowers",
    right: "Live in a world where you alone have superpowers",
    category: "superpowers"
  },
  {
    left: "Be able to grant one wish to anyone but yourself",
    right: "Have three wishes for yourself but never help anyone else",
    category: "ethical"
  },
  {
    left: "Have perfect physical health but chronic mental struggles",
    right: "Have perfect mental health but chronic physical ailments",
    category: "lifestyle"
  },
  {
    left: "Live in a society that values collective good over individual freedom",
    right: "Live in a society that values individual freedom over collective good",
    category: "philosophical"
  },
  {
    left: "Be able to experience any fictional world for real",
    right: "Be able to bring one fictional character to the real world",
    category: "fun"
  },
  {
    left: "Have the ability to bring back one extinct species",
    right: "Have the ability to prevent one current species from going extinct",
    category: "ethical"
  },
  {
    left: "Live through the most important historical events as an observer",
    right: "Live an ordinary life but with extraordinary relationships",
    category: "lifestyle"
  },
  {
    left: "Have perfect intuition about people's intentions",
    right: "Have perfect logic in all decision-making",
    category: "superpowers"
  },
  {
    left: "Know what happens after death but not be able to tell anyone",
    right: "Never know what happens after death but have absolute faith",
    category: "philosophical"
  },
  {
    left: "Be able to change one thing about human nature",
    right: "Be able to change one thing about the physical world",
    category: "ethical"
  },
  {
    left: "Have children who are guaranteed to be happy but not successful",
    right: "Have children who are guaranteed to be successful but struggle with happiness",
    category: "ethical"
  },
  {
    left: "Live in a world where magic is real but dangerous",
    right: "Live in a world where advanced technology solves all problems",
    category: "philosophical"
  },
  {
    left: "Be able to master any instrument instantly",
    right: "Be able to master any sport instantly",
    category: "superpowers"
  },
  {
    left: "Have your art appreciated after you die",
    right: "Have your art moderately appreciated during your lifetime",
    category: "lifestyle"
  },
  {
    left: "Live without the concept of money",
    right: "Live without the concept of time",
    category: "philosophical"
  },
  {
    left: "Be able to experience the world from your pet's perspective",
    right: "Be able to experience the world from a plant's perspective",
    category: "fun"
  },
  {
    left: "Have the power to make everyone you meet slightly happier",
    right: "Have the power to make yourself significantly happier",
    category: "ethical"
  },
  {
    left: "Live in a world where everyone is completely honest",
    right: "Live in a world where everyone is completely kind",
    category: "philosophical"
  },
  {
    left: "Be able to travel anywhere instantly but never stay longer than an hour",
    right: "Travel slowly but be able to stay as long as you want",
    category: "lifestyle"
  },
  {
    left: "Have every book ever written memorized",
    right: "Be able to write one book that changes the world",
    category: "superpowers"
  },
  {
    left: "Live in a world where everyone shares your values",
    right: "Live in a diverse world where growth comes from different perspectives",
    category: "philosophical"
  },
  {
    left: "Have the ability to see the best in everyone",
    right: "Have the ability to see the truth about everyone",
    category: "ethical"
  },
  {
    left: "Experience true enlightenment for one day",
    right: "Make steady spiritual progress throughout your entire life",
    category: "philosophical"
  },
  {
    left: "Be able to perfectly recall every moment of your life",
    right: "Be able to selectively forget any memory you choose",
    category: "superpowers"
  },
  {
    left: "Have humanity colonize the stars but destroy Earth",
    right: "Save Earth but humanity never leaves the planet",
    category: "ethical"
  },
  {
    left: "Live in a simulation where everything feels real",
    right: "Live in base reality even if it's less interesting",
    category: "philosophical"
  },
  {
    left: "Have your greatest fear come true but overcome it",
    right: "Never face your greatest fear but always wonder about it",
    category: "lifestyle"
  },
  {
    left: "Be able to talk to your future self once",
    right: "Be able to talk to your past self once",
    category: "superpowers"
  },
  {
    left: "Have the ability to solve one global crisis",
    right: "Have the ability to solve all your personal problems",
    category: "ethical"
  },
  {
    left: "Experience perfect love for a brief time",
    right: "Experience imperfect but lasting love for a lifetime",
    category: "philosophical"
  },
  {
    left: "Be able to create anything you imagine but never enjoy it",
    right: "Not be able to create anything but deeply appreciate everything",
    category: "lifestyle"
  },
  {
    left: "Live in a world where everyone reads minds",
    right: "Live in a world where everyone is immune to mind reading",
    category: "superpowers"
  },
  {
    left: "Have unshakeable confidence but sometimes be wrong",
    right: "Always be right but constantly doubt yourself",
    category: "philosophical"
  },
  {
    left: "Be remembered for 1000 years after you die",
    right: "Impact millions of lives anonymously during your lifetime",
    category: "ethical"
  },
  {
    left: "Live in a peaceful world with no challenges",
    right: "Live in a challenging world where you can make a difference",
    category: "philosophical"
  },
  {
    left: "Have the ability to fly but be terrified of heights",
    right: "Have super strength but be physically frail otherwise",
    category: "fun"
  },
  {
    left: "Experience the most intense friendship possible for one year",
    right: "Have many moderate friendships throughout your life",
    category: "lifestyle"
  },
  {
    left: "Be able to change your personality at will",
    right: "Have a fixed personality but be completely comfortable with it",
    category: "philosophical"
  },
  {
    left: "Know the meaning of life but have no one believe you",
    right: "Never know the meaning but live a meaningful life anyway",
    category: "philosophical"
  },
  {
    left: "Have the power to bring one historical figure to the present",
    right: "Have the power to visit any point in history as an observer",
    category: "superpowers"
  },
  {
    left: "Be able to feel what others feel at all times",
    right: "Be completely immune to emotional influence from others",
    category: "philosophical"
  },
  {
    left: "Have your ideal body but your mind ages at double speed",
    right: "Keep your current body but your mind stays youthful forever",
    category: "lifestyle"
  },
  {
    left: "Live in a world with absolute free will and chaos",
    right: "Live in a deterministic world with order and predictability",
    category: "philosophical"
  },
  {
    left: "Be able to give anyone one moment of perfect happiness",
    right: "Remove one moment of suffering from anyone's life",
    category: "ethical"
  },
  {
    left: "Have access to all information in the universe instantly",
    right: "Have unlimited time to discover information naturally",
    category: "superpowers"
  },
  {
    left: "Live multiple parallel lives simultaneously",
    right: "Live one focused life with complete presence",
    category: "philosophical"
  },
  {
    left: "Be able to perfectly mimic anyone's abilities for an hour",
    right: "Have one unique ability no one else has",
    category: "superpowers"
  },
  {
    left: "Have dinner with your personal hero who turns out to be disappointing",
    right: "Never meet them and keep your admiration intact",
    category: "lifestyle"
  },
  {
    left: "Live in a world where art is valued above all else",
    right: "Live in a world where science is valued above all else",
    category: "philosophical"
  },
  {
    left: "Be able to experience music in colors",
    right: "Be able to experience colors as sounds",
    category: "fun"
  },
  {
    left: "Have the perfect romantic relationship but no close friends",
    right: "Have amazing friendships but never find romantic love",
    category: "lifestyle"
  },
  {
    left: "Be able to make one person immortal (not yourself)",
    right: "Add 10 years to the life of everyone currently alive",
    category: "ethical"
  },
  {
    left: "Live in harmony with nature but without modern medicine",
    right: "Live with all modern conveniences but disconnected from nature",
    category: "lifestyle"
  },
  {
    left: "Have the ability to end all wars but also eliminate competition",
    right: "Keep human nature as is with both cooperation and conflict",
    category: "ethical"
  },
  {
    left: "Be the first person to discover intelligent alien life",
    right: "Be the first person to cure aging",
    category: "philosophical"
  },
  {
    left: "Have your consciousness merged with AI",
    right: "Remain purely human despite technological advances",
    category: "philosophical"
  },
  {
    left: "Be able to experience one hour as if it were a year",
    right: "Be able to experience one year as if it were an hour",
    category: "superpowers"
  },
  {
    left: "Live in a world where everyone pursues their passion",
    right: "Live in a world where everyone contributes to the greater good",
    category: "philosophical"
  }
];

// Game class
class WouldYouRatherGame {
  constructor() {
    this.allQuestions = questions;
    this.currentQuestionIndex = 0;
    this.shuffledQuestions = this.shuffleArray([...this.allQuestions]);
    this.totalAnswered = 0;
    this.currentStreak = 0;
    this.hasAnswered = false;
    this.currentFilter = 'all';
    this.history = this.loadHistory();
    this.categoryStats = {};

    this.elements = {
      leftChoice: document.getElementById('leftChoice'),
      rightChoice: document.getElementById('rightChoice'),
      leftText: document.getElementById('leftText'),
      rightText: document.getElementById('rightText'),
      leftFill: document.getElementById('leftFill'),
      rightFill: document.getElementById('rightFill'),
      leftPercent: document.getElementById('leftPercent'),
      rightPercent: document.getElementById('rightPercent'),
      nextBtn: document.getElementById('nextBtn'),
      questionCount: document.getElementById('questionCount'),
      totalAnswered: document.getElementById('totalAnswered'),
      currentStreak: document.getElementById('currentStreak'),
      favoriteCategory: document.getElementById('favoriteCategory'),
      categoryBadge: document.getElementById('categoryBadge'),
      filterBtn: document.getElementById('filterBtn'),
      skipBtn: document.getElementById('skipBtn'),
      shareBtn: document.getElementById('shareBtn'),
      filterModal: document.getElementById('filterModal'),
      closeFilterModal: document.getElementById('closeFilterModal'),
      historyList: document.getElementById('historyList'),
      toast: document.getElementById('toast')
    };

    this.init();
  }

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  init() {
    this.loadQuestion();
    this.setupEventListeners();
    this.updateStats();
    this.renderHistory();
  }

  setupEventListeners() {
    this.elements.leftChoice.addEventListener('click', () => this.handleChoice('left'));
    this.elements.rightChoice.addEventListener('click', () => this.handleChoice('right'));
    this.elements.nextBtn.addEventListener('click', () => this.nextQuestion());
    this.elements.filterBtn.addEventListener('click', () => this.openFilterModal());
    this.elements.skipBtn.addEventListener('click', () => this.skipQuestion());
    this.elements.shareBtn.addEventListener('click', () => this.shareQuestion());
    this.elements.closeFilterModal.addEventListener('click', () => this.closeFilterModal());

    document.querySelectorAll('.filter-option').forEach(option => {
      option.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
    });

    this.elements.filterModal.addEventListener('click', (e) => {
      if (e.target === this.elements.filterModal) {
        this.closeFilterModal();
      }
    });
  }

  loadQuestion() {
    if (this.currentQuestionIndex >= this.shuffledQuestions.length) {
      this.shuffledQuestions = this.shuffleArray([...this.getFilteredQuestions()]);
      this.currentQuestionIndex = 0;
    }

    const question = this.shuffledQuestions[this.currentQuestionIndex];
    this.currentQuestion = question;

    this.elements.leftText.textContent = question.left;
    this.elements.rightText.textContent = question.right;
    this.elements.categoryBadge.textContent = question.category;
    this.hasAnswered = false;

    this.elements.leftChoice.classList.remove('selected', 'disabled');
    this.elements.rightChoice.classList.remove('selected', 'disabled');

    const percentageBars = document.querySelectorAll('.percentage-bar');
    percentageBars.forEach(bar => bar.classList.remove('show'));

    this.elements.nextBtn.style.display = 'none';
  }

  getFilteredQuestions() {
    if (this.currentFilter === 'all') {
      return this.allQuestions;
    }
    return this.allQuestions.filter(q => q.category === this.currentFilter);
  }

  handleChoice(choice) {
    if (this.hasAnswered) return;

    this.hasAnswered = true;
    this.totalAnswered++;
    this.currentStreak++;

    const choiceText = choice === 'left' ? this.currentQuestion.left : this.currentQuestion.right;

    this.addToHistory({
      choice: choiceText,
      category: this.currentQuestion.category,
      question: `${this.currentQuestion.left} OR ${this.currentQuestion.right}`,
      timestamp: Date.now()
    });

    this.updateCategoryStats(this.currentQuestion.category);

    if (choice === 'left') {
      this.elements.leftChoice.classList.add('selected');
      this.elements.rightChoice.classList.add('disabled');
    } else {
      this.elements.rightChoice.classList.add('selected');
      this.elements.leftChoice.classList.add('disabled');
    }

    this.showResults(choice);
    this.updateStats();
    this.renderHistory();
  }

  showResults(userChoice) {
    const leftPercentage = Math.floor(Math.random() * 30) + 35;
    const rightPercentage = 100 - leftPercentage;

    const percentageBars = document.querySelectorAll('.percentage-bar');
    percentageBars.forEach(bar => bar.classList.add('show'));

    setTimeout(() => {
      this.elements.leftFill.style.width = `${leftPercentage}%`;
      this.elements.rightFill.style.width = `${rightPercentage}%`;
      this.elements.leftPercent.textContent = `${leftPercentage}%`;
      this.elements.rightPercent.textContent = `${rightPercentage}%`;
    }, 100);

    this.elements.nextBtn.style.display = 'block';
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.elements.questionCount.textContent = this.totalAnswered + 1;
    this.loadQuestion();
  }

  skipQuestion() {
    if (this.hasAnswered) return;

    this.currentStreak = 0;
    this.showToast('Question skipped!');
    this.currentQuestionIndex++;
    this.elements.questionCount.textContent = this.totalAnswered + 1;
    this.updateStats();
    this.loadQuestion();
  }

  shareQuestion() {
    const text = `Would you rather: ${this.currentQuestion.left} OR ${this.currentQuestion.right}?`;

    if (navigator.share) {
      navigator.share({
        title: 'Would You Rather?',
        text: text
      }).catch(() => {
        this.copyToClipboard(text);
      });
    } else {
      this.copyToClipboard(text);
    }
  }

  copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast('Question copied to clipboard!');
      }).catch(() => {
        this.showToast('Could not copy question');
      });
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        this.showToast('Question copied to clipboard!');
      } catch (err) {
        this.showToast('Could not copy question');
      }
      document.body.removeChild(textarea);
    }
  }

  openFilterModal() {
    this.elements.filterModal.classList.add('show');
  }

  closeFilterModal() {
    this.elements.filterModal.classList.remove('show');
  }

  setFilter(filter) {
    this.currentFilter = filter;

    document.querySelectorAll('.filter-option').forEach(option => {
      option.classList.remove('active');
      if (option.dataset.filter === filter) {
        option.classList.add('active');
      }
    });

    const filterText = filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1);
    this.elements.filterBtn.querySelector('span:last-child').textContent = `Filter: ${filterText}`;

    this.shuffledQuestions = this.shuffleArray([...this.getFilteredQuestions()]);
    this.currentQuestionIndex = 0;
    this.loadQuestion();
    this.closeFilterModal();
    this.showToast(`Filtering by: ${filterText}`);
  }

  updateStats() {
    this.elements.totalAnswered.textContent = this.totalAnswered;
    this.elements.currentStreak.textContent = this.currentStreak;

    const favoriteCategory = this.getFavoriteCategory();
    this.elements.favoriteCategory.textContent = favoriteCategory || 'None';
  }

  updateCategoryStats(category) {
    this.categoryStats[category] = (this.categoryStats[category] || 0) + 1;
  }

  getFavoriteCategory() {
    if (Object.keys(this.categoryStats).length === 0) return null;

    let maxCategory = null;
    let maxCount = 0;

    for (const [category, count] of Object.entries(this.categoryStats)) {
      if (count > maxCount) {
        maxCount = count;
        maxCategory = category;
      }
    }

    return maxCategory ? maxCategory.charAt(0).toUpperCase() + maxCategory.slice(1) : null;
  }

  addToHistory(entry) {
    this.history.unshift(entry);
    if (this.history.length > 10) {
      this.history = this.history.slice(0, 10);
    }
    this.saveHistory();
  }

  renderHistory() {
    if (this.history.length === 0) {
      this.elements.historyList.innerHTML = '<p style="color: var(--text-muted); text-align: center;">No choices yet. Start answering questions!</p>';
      return;
    }

    this.elements.historyList.innerHTML = this.history.map(entry => `
      <div class="history-item">
        <div class="history-item-header">
          <span class="history-choice">${entry.choice}</span>
          <span class="history-category">${entry.category}</span>
        </div>
        <div class="history-question">${entry.question}</div>
      </div>
    `).join('');
  }

  loadHistory() {
    try {
      const saved = localStorage.getItem('wouldYouRatherHistory');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveHistory() {
    try {
      localStorage.setItem('wouldYouRatherHistory', JSON.stringify(this.history));
    } catch (e) {
      console.error('Could not save history');
    }
  }

  showToast(message) {
    this.elements.toast.textContent = message;
    this.elements.toast.classList.add('show');

    setTimeout(() => {
      this.elements.toast.classList.remove('show');
    }, 3000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new WouldYouRatherGame();
});