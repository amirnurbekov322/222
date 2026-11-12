window.LECTURES_DATA = [
  {
    title: "Дүниежүзілік паутинаның (WWW) архитектурасы. HTTP және HTTPS хаттамалары",
    source: "MDN Web Docs — HTTP шолуы (developer.mozilla.org)",
    html: `
      <h3>1. Клиент-серверлік өзара әрекеттесу принципі</h3>
      <p>Дүниежүзілік паутина (World Wide Web) клиент-серверлік архитектураға негізделген. Клиент ретінде пайдаланушының веб-шолғышы (Chrome, Firefox, Safari) әрекет етсе, сервер ретінде сайт файлдары сақталатын қашықтағы компьютер (Nginx, Apache) қолданылады.</p>
      <h3>2. HTTP және HTTPS хаттамалары</h3>
      <ul>
        <li><strong>HTTP (HyperText Transfer Protocol)</strong> — гипертексті тасымалдау хаттамасы. Негізгі әдістері: <code>GET</code> (деректерді алу), <code>POST</code> (деректер жіберу), <code>PUT</code> (жаңарту), <code>DELETE</code> (жою).</li>
        <li><strong>HTTPS (HTTP Secure)</strong> — SSL/TLS криптографиялық хаттамалары арқылы шифрлауды қолдайтын қауіпсіз кеңейтім.</li>
      </ul>
      <h3>3. HTTP күй кодтары</h3>
      <ul>
        <li><code>200 OK</code> — сұрау сәтті орындалды.</li>
        <li><code>301 / 302</code> — басқа мекенжайға бағыттау (Redirect).</li>
        <li><code>403 Forbidden</code> — ресурсқа кіруге тыйым салынған.</li>
        <li><code>404 Not Found</code> — сұралған бет серверден табылмады.</li>
        <li><code>500 Internal Server Error</code> — сервер жағындағы ішкі қате.</li>
      </ul>
    `
  },
  {
    title: "HTML5 кіріспе. Құжат құрылымы және семантикалық верстка",
    source: "W3Schools HTML5 Tutorial (w3schools.com/html)",
    html: `
      <h3>1. HTML тілінің мақсаты</h3>
      <p>HTML (HyperText Markup Language) — гипертекстті белгілеу тілі. Ол жұптық және тақ тегтердің көмегімен веб-беттің құрылымы мен мағыналық мазмұнын анықтайды.</p>
      <h3>2. HTML5 құжатының негізгі үлгісі</h3>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="kk"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Бет атауы&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Сәлем, әлем!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      <h3>3. HTML5 семантикалық тегтері</h3>
      <ul>
        <li><code>&lt;header&gt;</code> — сайттың жоғарғы бөлігі (логотип, навигация).</li>
        <li><code>&lt;nav&gt;</code> — сілтемелері бар навигация панелі.</li>
        <li><code>&lt;main&gt;</code> — беттің негізгі бірегей мазмұны.</li>
        <li><code>&lt;section&gt;</code> — құжаттың логикалық бөлімі.</li>
        <li><code>&lt;article&gt;</code> — тәуелсіз мазмұн фрагменті (жаңалық, мақала).</li>
        <li><code>&lt;footer&gt;</code> — сайттың төменгі бөлігі.</li>
      </ul>
    `
  },
  {
    title: "HTML5-те формалармен, кестелермен және мультимедиамен жұмыс істеу",
    source: "Metanit — HTML5 нұсқаулығы (metanit.com/web/html5)",
    html: `
      <h3>1. HTML кестелері</h3>
      <p>Кестелік деректерді көрсету үшін <code>&lt;table&gt;</code> тегі қолданылады. Жолдар <code>&lt;tr&gt;</code>, тақырып ұяшықтары <code>&lt;th&gt;</code>, ал қарапайым ұяшықтар <code>&lt;td&gt;</code> арқылы беріледі.</p>
      <h3>2. Веб-формалар және енгізу элементтері</h3>
      <p>Формалар <code>&lt;form&gt;</code> тегі арқылы жасалады. Негізгі басқару элементтері:</p>
      <ul>
        <li><code>&lt;input type="text"&gt;</code>, <code>email</code>, <code>password</code>, <code>number</code>, <code>checkbox</code>, <code>radio</code>.</li>
        <li><code>&lt;textarea&gt;</code> — көп жолды мәтіндік өріс.</li>
        <li><code>&lt;select&gt;</code> және <code>&lt;option&gt;</code> — ашылмалы тізім.</li>
      </ul>
      <h3>3. Кірістірілген валидация және мультимедиа</h3>
      <p>HTML5 <code>required</code>, <code>minlength</code>, <code>pattern</code> атрибуттары арқылы JavaScript-сіз тексеру жүргізеді. Медиафайлдар үшін <code>&lt;audio&gt;</code> және <code>&lt;video&gt;</code> тегтері қолданылады.</p>
    `
  },
  {
    title: "CSS3 негіздері. Селекторлар, каскадтылық және блоктық модель",
    source: "MDN Web Docs — CSS негіздері (developer.mozilla.org)",
    html: `
      <h3>1. CSS қосу тәсілдері</h3>
      <p>Стильдер сыртқы файл арқылы (<code>&lt;link rel="stylesheet" href="style.css"&gt;</code>), <code>&lt;style&gt;</code> тегі ішінде немесе <code>style="..."</code> атрибуты арқылы қосылады.</p>
      <h3>2. Селекторлар және спецификалық</h3>
      <p>Селекторлар: тег бойынша (<code>p</code>), класс бойынша (<code>.card</code>), ID бойынша (<code>#header</code>) және псевдокластар (<code>:hover</code>, <code>:focus</code>). Ережелер салмағы: кірістірілген стиль &gt; ID &gt; класс &gt; тег.</p>
      <h3>3. Блоктық модель (Box Model)</h3>
      <ul>
        <li><code>Content</code> — мазмұнның өзі (<code>width</code>, <code>height</code>).</li>
        <li><code>Padding</code> — мазмұннан жиекке дейінгі ішкі шегініс.</li>
        <li><code>Border</code> — элементті қоршап тұрған рамка.</li>
        <li><code>Margin</code> — сыртқы шегініс.</li>
      </ul>
      <p><code>box-sizing: border-box</code> қасиеті ішкі шегініс пен рамканы блоктың жалпы еніне қосады.</p>
    `
  },
  {
    title: "Элементтерді заманауи орналастыру: Flexbox және CSS Grid",
    source: "CSS-Tricks — Complete Guide to Flexbox & Grid (css-tricks.com)",
    html: `
      <h3>1. Flexbox технологиясы (бір өлшемді орналастыру)</h3>
      <p>Ата-аналық элементке <code>display: flex</code> беріледі. Негізгі қасиеттері:</p>
      <ul>
        <li><code>flex-direction</code> — басты ось бағыты (<code>row</code> немесе <code>column</code>).</li>
        <li><code>justify-content</code> — басты ось бойымен туралау (<code>center</code>, <code>space-between</code>).</li>
        <li><code>align-items</code> — көлденең ось бойымен туралау.</li>
        <li><code>flex-wrap: wrap</code> — орын жетпегенде жаңа жолға көшіру.</li>
      </ul>
      <h3>2. CSS Grid (екі өлшемді тор)</h3>
      <p><code>display: grid</code> жолдар мен бағандарды бір уақытта басқарады: <code>grid-template-columns: repeat(3, 1fr);</code> және <code>gap: 16px;</code>.</p>
      <h3>3. Адаптивті дизайн (Media Queries)</h3>
      <p><code>@media (max-width: 768px) { ... }</code> ережесі мобильді экрандарға арналған стильдерді қолданады.</p>
    `
  },
  {
    title: "JavaScript тіліне кіріспе. Айнымалылар, деректер типтері және операторлар",
    source: "Learn.JavaScript.ru / JavaScript.info (javascript.info)",
    html: `
      <h3>1. Айнымалыларды жариялау</h3>
      <p>Заманауи JavaScript (ES6+) стандартында айнымалылар <code>let</code> (өзгеретін мән) және <code>const</code> (тұрақты мән) арқылы жарияланады. Ескірген <code>var</code> кілт сөзі қолданылмайды.</p>
      <h3>2. Деректер типтері</h3>
      <p>JavaScript-те 8 негізгі деректер типі бар: 7 қарапайым (<code>number</code>, <code>bigint</code>, <code>string</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>) және 1 күрделі (<code>object</code>).</p>
      <h3>3. Қатаң теңдік және операторлар</h3>
      <p>Салыстыру кезінде типтерді түрлендірмейтін қатаң теңдік операторы <code>===</code> қолданылады. Логикалық операторлар: <code>&&</code> (ЖӘНЕ), <code>||</code> (НЕМЕСЕ), <code>!</code> (ЕМЕС).</p>
    `
  },
  {
    title: "JavaScript-тегі функциялар, массивтер және объектілер",
    source: "MDN Web Docs — JavaScript Guide (developer.mozilla.org)",
    html: `
      <h3>1. Функциялар және жебелі функциялар (Arrow Functions)</h3>
      <pre><code>// Дәстүрлі функция
function sum(a, b) { return a + b; }

// Жебелі функция (ES6)
const multiply = (a, b) => a * b;</code></pre>
      <h3>2. Массивтерді өңдеу әдістері</h3>
      <ul>
        <li><code>map()</code> — әр элементті түрлендіріп жаңа массив қайтарады.</li>
        <li><code>filter()</code> — шартқа сәйкес келетін элементтерді сүзеді.</li>
        <li><code>find()</code> — шартқа сай бірінші элементті табады.</li>
        <li><code>reduce()</code> — массивті бір қорытынды мәнге жинақтайды.</li>
      </ul>
      <h3>3. Объектілер және деструктуризация</h3>
      <p>Объектілер «кілт: мән» жұптарынан тұрады. Деструктуризация (<code>const { name, age } = user;</code>) қасиеттерді ыңғайлы алуға мүмкіндік береді.</p>
    `
  },
  {
    title: "DOM (Document Object Model) құрылымы және оқиғаларды өңдеу",
    source: "JavaScript.info — Құжат және оқиғалар (javascript.info/document)",
    html: `
      <h3>1. DOM ағашы дегеніміз не?</h3>
      <p>DOM — веб-беттің HTML құрылымын объектілер ағашы түрінде ұсынатын бағдарламалық интерфейс. JavaScript осы ағаш арқылы беттің мазмұны мен стильдерін динамикалық түрде өзгертеді.</p>
      <h3>2. Элементтерді іздеу және өзгерту</h3>
      <ul>
        <li><code>document.querySelector('.btn')</code> — CSS селекторы бойынша бірінші элементті табады.</li>
        <li><code>document.querySelectorAll('li')</code> — барлық сәйкес элементтер тізімін қайтарады.</li>
        <li><code>element.textContent</code> және <code>element.innerHTML</code> — мәтін мен HTML-ді өзгерту.</li>
        <li><code>element.classList.add / remove / toggle</code> — CSS кластарын басқару.</li>
      </ul>
      <h3>3. Оқиғаларды тыңдау (Event Listeners)</h3>
      <pre><code>btn.addEventListener('click', (event) => {
  event.preventDefault();
  alert('Батырма басылды!');
});</code></pre>
    `
  },
  {
    title: "Асинхронды JavaScript: Promises, Async/Await және Fetch API",
    source: "MDN Web Docs — Using the Fetch API (developer.mozilla.org)",
    html: `
      <h3>1. Асинхрондылық және Event Loop</h3>
      <p>JavaScript бір ағынды тіл болғандықтан, серверден деректерді күту кезінде интерфейсті бұғаттамау үшін оқиғалар циклі (Event Loop) мен асинхронды операцияларды қолданады.</p>
      <h3>2. Promise және Async/Await</h3>
      <p><code>Promise</code> — болашақта аяқталатын операция нәтижесін білдіретін объект (күйлері: <code>pending</code>, <code>fulfilled</code>, <code>rejected</code>). <code>async/await</code> синтаксисі асинхронды кодты синхронды код сияқты оқуға ыңғайлы етеді.</p>
      <h3>3. Fetch API арқылы серверге сұрау жіберу</h3>
      <pre><code>async function loadUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('Қате:', err);
  }
}</code></pre>
    `
  },
  {
    title: "Деректерді клиент жағында сақтау: LocalStorage, SessionStorage және Cookies",
    source: "W3Schools — HTML Web Storage API (w3schools.com/html/html5_webstorage.asp)",
    html: `
      <h3>1. Web Storage API</h3>
      <ul>
        <li><strong>LocalStorage</strong> — деректерді шолғышта мерзімсіз сақтайды (қойынды жабылса да өшпейді, көлемі ~5–10 МБ).</li>
        <li><strong>SessionStorage</strong> — деректерді тек ағымдағы қойынды (сессия) жабылғанға дейін сақтайды.</li>
      </ul>
      <h3>2. Негізгі әдістері</h3>
      <pre><code>localStorage.setItem('theme', 'dark');
const currentTheme = localStorage.getItem('theme');
localStorage.removeItem('theme');</code></pre>
      <p>Объектілерді сақтау үшін <code>JSON.stringify()</code>, ал кері оқу үшін <code>JSON.parse()</code> қолданылады.</p>
      <h3>3. Cookies файлдары</h3>
      <p>Cookies — серверге әрбір HTTP сұраумен бірге жіберілетін шағын мәтіндік деректер (көлемі 4 КБ-қа дейін). Негізінен пайдаланушыны аутентификациялау үшін қолданылады.</p>
    `
  },
  {
    title: "Git нұсқаларды басқару жүйесі және GitHub платформасымен жұмыс",
    source: "Pro Git кітабы — Git негіздері (git-scm.com/book/ru/v2)",
    html: `
      <h3>1. Нұсқаларды басқару жүйесінің рөлі</h3>
      <p>Git — кодтағы өзгерістер тарихын бақылауға және командамен бірлесіп жұмыс істеуге арналған үлестірілген жүйе.</p>
      <h3>2. Негізгі Git командалары</h3>
      <ul>
        <li><code>git init</code> — жаңа локальді репозиторий құру.</li>
        <li><code>git status</code> — өзгертілген файлдар күйін тексеру.</li>
        <li><code>git add .</code> — файлдарды коммитке дайындау (Staging).</li>
        <li><code>git commit -m "Хабарлама"</code> — өзгерістерді тарихқа тіркеу.</li>
        <li><code>git push origin main</code> — өзгерістерді қашықтағы GitHub серверіне жүктеу.</li>
      </ul>
      <h3>3. GitHub Pages</h3>
      <p>GitHub Pages статистикалық веб-сайттарды тікелей репозиторийден тегін жариялауға (хостингке) мүмкіндік береді.</p>
    `
  },
  {
    title: "Заманауи Frontend-фреймворктерге шолу. Компоненттік тәсіл (React негіздері)",
    source: "React ресми құжаттамасы (react.dev)",
    html: `
      <h3>1. SPA (Single Page Application) тұжырымдамасы</h3>
      <p>Бір беттік қосымшалар (SPA) бетті толық қайта жүктемей-ақ контентті динамикалық түрде жаңартады, бұл веб-қосымшаның жылдамдығын арттырады.</p>
      <h3>2. Компоненттік архитектура</h3>
      <p>Интерфейс тәуелсіз, қайта қолданылатын блоктарға — компоненттерге (мысалы, <code>Navbar</code>, <code>ProductCard</code>, <code>Footer</code>) бөлінеді.</p>
      <h3>3. JSX, Props және State</h3>
      <ul>
        <li><strong>JSX</strong> — JavaScript ішінде HTML-ге ұқсас белгілеу жазуға мүмкіндік беретін синтаксис.</li>
        <li><strong>Props</strong> — ата-аналық компоненттен еншілес компонентке берілетін деректер.</li>
        <li><strong>State (<code>useState</code>)</strong> — компоненттің ішкі күйін сақтау және жаңарту механизмі.</li>
      </ul>
    `
  },
  {
    title: "Серверлік бағдарламалау негіздері. Node.js және Express.js ортасы",
    source: "Node.js және Express ресми нұсқаулығы (expressjs.com)",
    html: `
      <h3>1. Node.js платформасы</h3>
      <p>Node.js — V8 қозғалтқышына негізделген, JavaScript кодын шолғыштан тыс серверде орындауға мүмкіндік беретін орта. Пакеттерді басқару үшін <code>npm</code> (Node Package Manager) қолданылады.</p>
      <h3>2. Express.js фреймворкі</h3>
      <p>Express.js — маршрутизацияны (Routing) және HTTP сұрауларын өңдеуді жеңілдететін минималистік веб-фреймворк:</p>
      <pre><code>const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Сервер жұмыс істеп тұр!' });
});

app.listen(3000);</code></pre>
    `
  },
  {
    title: "REST API архитектурасы және JSON деректер форматы",
    source: "RESTful API нұсқаулығы (restfulapi.net)",
    html: `
      <h3>1. REST архитектуралық стилі</h3>
      <p>REST (Representational State Transfer) — клиент пен сервер арасындағы деректер алмасу стандарттарының жиынтығы. Негізгі қағидалары: клиент-сервер бөлінуі, күйді сақтамау (Stateless) және бірыңғай ресурс идентификаторлары (URI).</p>
      <h3>2. CRUD операциялары және HTTP әдістері</h3>
      <ul>
        <li><strong>Create (Құру):</strong> <code>POST /api/products</code></li>
        <li><strong>Read (Оқу):</strong> <code>GET /api/products</code> немесе <code>GET /api/products/1</code></li>
        <li><strong>Update (Жаңарту):</strong> <code>PUT /api/products/1</code></li>
        <li><strong>Delete (Жою):</strong> <code>DELETE /api/products/1</code></li>
      </ul>
      <h3>3. JSON форматы</h3>
      <p>JSON (JavaScript Object Notation) — жеңіл, адам оқи алатын деректер алмасу форматы.</p>
    `
  },
  {
    title: "Веб-қосымшалардың қауіпсіздігі (XSS, CSRF, SQL-инъекциялар) және өнімділікті оңтайландыру",
    source: "OWASP Top 10 Web Security Risks (owasp.org)",
    html: `
      <h3>1. Негізгі веб-осалдықтар және қорғаныс</h3>
      <ul>
        <li><strong>XSS (Cross-Site Scripting)</strong> — бетке зиянды JavaScript кодын енгізу. Қорғаныс: пайдаланушы енгізген деректерді экрандау (Sanitization) және CSP (Content Security Policy) баптау.</li>
        <li><strong>CSRF (Cross-Site Request Forgery)</strong> — пайдаланушы атынан жалған сұраулар жіберу. Қорғаныс: бірегей CSRF-токендер және <code>SameSite</code> cookie атрибуттары.</li>
        <li><strong>SQL Injection</strong> — дерекқор сұрауларына зиянды SQL код қосу. Қорғаныс: параметрленген сұрауларды (Prepared Statements) қолдану.</li>
      </ul>
      <h3>2. Сайт жылдамдығын оңтайландыру</h3>
      <p>Суреттерді заманауи WebP форматына сығу, CSS/JS файлдарын минификациялау, кэштеуді баптау және Lazy Loading (кешіктіріп жүктеу) қолдану сайттың жүктелу уақытын айтарлықтай қысқартады.</p>
    `
  }
];