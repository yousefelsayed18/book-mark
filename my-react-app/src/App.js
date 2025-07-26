import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="title">مرحباً بك في تطبيق React</h1>
          <p className="subtitle">ابدأ رحلتك في تطوير الواجهات الأمامية</p>
        </header>
        
        <main className="main">
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">⚛️</div>
              <h3>React</h3>
              <p>مكتبة JavaScript قوية لبناء واجهات المستخدم التفاعلية</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>CSS</h3>
              <p>تصميم جميل وحديث مع أفضل ممارسات التصميم</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>الأداء</h3>
              <p>تطبيق سريع ومحسن للأداء العالي</p>
            </div>
          </div>
          
          <div className="cta-section">
            <h2>ابدأ التطوير الآن</h2>
            <p>قم بتعديل ملف <code>src/App.js</code> وسترى التغييرات مباشرة!</p>
            <button className="cta-button">ابدأ التعلم</button>
          </div>
        </main>
        
        <footer className="footer">
          <p>تم إنشاء هذا المشروع باستخدام Create React App</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
