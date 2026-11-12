window.SRSP_DATA = [
  {
    title: "HTTP сұрауларын талдау және DevTools Network панелімен жұмыс",
    source: "Chrome DevTools құжаттамасы (developer.chrome.com/docs/devtools/network)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>Браузердің әзірлеуші құралдары (DevTools) арқылы HTTP/HTTPS сұрауларының тақырыптарын (Headers), әдістерін және сервер жауап кодтарын талдауды үйрену.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li>Кез келген ақпараттық веб-сайтты ашып, <code>F12</code> пернесі арқылы DevTools панелін іске қосыңыз.</li>
        <li><strong>Network (Желі)</strong> қойындысына өтіп, бетті қайта жүктеңіз (<code>Ctrl + R</code>).</li>
        <li>Негізгі HTML құжатты таңдап, келесі параметрлерді жазып алыңыз: сұрау әдісі (<code>Request Method</code>), жауап коды (<code>Status Code</code>), сервердің IP-мекенжайы, <code>Content-Type</code> және <code>User-Agent</code> тақырыптары.</li>
        <li>Жоқ бетке өту арқылы <code>404 Not Found</code> қатесін тіркеп, скриншот жасаңыз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li>GET және POST сұрауларының негізгі айырмашылығы неде?</li>
        <li>HTTPS хаттамасы деректерді қалай қорғайды?</li>
      </ul>
    `
  },
  {
    title: "Семантикалық HTML5 құрылымын қолдана отырып жеке портфолио бетін құру",
    source: "W3Schools HTML Semantic Elements (w3schools.com/html/html5_semantic_elements.asp)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p><code>&lt;div&gt;</code> тегтерін шамадан тыс қолданбай, HTML5-тің семантикалық тегтері негізінде құрылымдалған веб-бет жасау.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li><code>portfolio.html</code> файлын жасаңыз.</li>
        <li><code>&lt;header&gt;</code> ішінде аты-жөніңізді және <code>&lt;nav&gt;</code> навигация мәзірін («Мен туралы», «Дағдылар», «Жобалар», «Байланыс») орналастырыңыз.</li>
        <li><code>&lt;main&gt;</code> ішінде үш бөлім (<code>&lt;section&gt;</code>) құрыңыз: өмірбаян, техникалық дағдылар тізімі (<code>&lt;ul&gt;</code>) және <code>&lt;article&gt;</code> тегімен ресімделген 2 оқу жобасы.</li>
        <li><code>&lt;footer&gt;</code> бөлімінде GitHub профиліңізге сілтеме қалдырыңыз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li>Семантикалық верстка SEO (іздеу жүйелері) үшін неге маңызды?</li>
        <li><code>&lt;section&gt;</code> мен <code>&lt;article&gt;</code> тегтерінің айырмашылығы қандай?</li>
      </ul>
    `
  },
  {
    title: "Кірістірілген валидациясы бар тіркелу формасы мен сабақ кестесін жасау",
    source: "MDN Web Docs — Client-side form validation (developer.mozilla.org)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>HTML5 форма элементтері мен кесте құрылымын тәжірибеде қолдану.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li><code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> тегтерін қолданып, апталық сабақ кестесін құрыңыз.</li>
        <li>Төмендегі өрістері бар тіркелу формасын (<code>&lt;form&gt;</code>) жасаңыз: Аты-жөні (<code>required</code>), Email (<code>type="email"</code>), Құпиясөз (<code>minlength="8"</code>), Курс таңдау (<code>&lt;select&gt;</code>) және келісім белгісі (<code>checkbox</code>).</li>
        <li>Барлық енгізу өрістерін <code>&lt;label for="..."&gt;</code> тегімен байланыстырыңыз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li><code>pattern</code> атрибуты арқылы телефон нөмірін қалай тексеруге болады?</li>
        <li><code>&lt;th&gt;</code> пен <code>&lt;td&gt;</code> тегтерінің айырмашылығы неде?</li>
      </ul>
    `
  },
  {
    title: "CSS3 блоктік моделі (Box Model) және тауар карточкасын безендіру",
    source: "MDN Web Docs — The box model (developer.mozilla.org)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>Ішкі/сыртқы шегіністерді, көлеңкелерді және псевдокластарды басқару арқылы UI-компонент құру.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li><code>style.css</code> файлын қосып, барлық элементтер үшін <code>box-sizing: border-box;</code> ережесін орнатыңыз.</li>
        <li>Ені <code>320px</code> болатын өнім карточкасын (сурет, атау, сипаттама, баға және «Себетке қосу» батырмасы) жасаңыз.</li>
        <li><code>border-radius</code>, <code>box-shadow</code> және тінтуірді апарғандағы <code>:hover</code> эффектісін баптаңыз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li><code>margin</code> және <code>padding</code> қасиеттерінің айырмашылығы неде?</li>
        <li>CSS селекторларының спецификалық басымдығы қалай есептеледі?</li>
      </ul>
    `
  },
  {
    title: "Flexbox және CSS Grid көмегімен адаптивті фотогалерея мен навигация құру",
    source: "CSS-Tricks — A Complete Guide to Grid (css-tricks.com)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>Заманауи CSS орналастыру технологиялары мен медиа-сұрауларды (Media Queries) меңгеру.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li><code>display: flex</code> және <code>justify-content: space-between</code> қолданып, логотип пен мәзірден тұратын адаптивті жоғарғы панель жасаңыз.</li>
        <li><code>display: grid</code> және <code>grid-template-columns: repeat(3, 1fr)</code> арқылы 6 карточкадан тұратын тор құрыңыз.</li>
        <li><code>@media (max-width: 768px)</code> арқылы планшетте 2 бағанға, ал <code>480px</code>-тен кіші экранда 1 бағанға ауысатын адаптивтілік қосыңыз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li>Қай жағдайда Flexbox, ал қай жағдайда CSS Grid қолданған тиімді?</li>
        <li>CSS Grid-тегі <code>1fr</code> өлшем бірлігі нені білдіреді?</li>
      </ul>
    `
  },
  {
    title: "JavaScript негіздері: Валюта конвертері және бағалау калькуляторы",
    source: "JavaScript.info — Негіздер (javascript.info/first-steps)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>JavaScript айнымалылары, шартты операторлар және типтерді түрлендіру бойынша алгоритмдік есептер шығару.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li>Теңге сомасын (KZT) USD, EUR және RUB валюталарына айналдыратын функция жазыңыз.</li>
        <li>Студенттің жинаған балына (0–100) байланысты әріптік бағасын (A, B, C, D, F) анықтайтын скрипт құрыңыз.</li>
        <li>Енгізілген деректердің теріс сан немесе мәтін еместігін (<code>isNaN</code>) тексеріңіз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li><code>let</code> пен <code>const</code> айнымалыларының айырмашылығы неде?</li>
        <li><code>==</code> және <code>===</code> операторлары қалай жұмыс істейді?</li>
      </ul>
    `
  },
  {
    title: "Массивтер мен объектілерді өңдеу (filter, map, reduce әдістері)",
    source: "MDN Web Docs — Array methods (developer.mozilla.org)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>Функционалдық бағдарламалау әдістері арқылы деректер жиынтығын сүзу және талдау.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li>Кемінде 8 студенттен тұратын объектілер массивін құрыңыз (қасиеттері: <code>id</code>, <code>name</code>, <code>group</code>, <code>gpa</code>).</li>
        <li><code>filter()</code> әдісімен GPA көрсеткіші 3.5-тен жоғары студенттерді сүзіп алыңыз.</li>
        <li><code>map()</code> арқылы тек студенттердің есімдерінен тұратын жаңа массив жасаңыз.</li>
        <li><code>reduce()</code> көмегімен барлық студенттердің орташа GPA мәнін есептеңіз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li><code>forEach()</code> пен <code>map()</code> әдістерінің негізгі айырмашылығы неде?</li>
        <li>Жебелі функциялардың (Arrow Functions) синтаксистік ерекшелігі қандай?</li>
      </ul>
    `
  },
  {
    title: "DOM манипуляциясы: Интерактивті тапсырмалар тізімі (To-Do List)",
    source: "JavaScript.info — DOM-ды өзгерту (javascript.info/modifying-document)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>Пайдаланушы әрекеттеріне жауап беретін интерактивті веб-интерфейс жасау.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li>Мәтін енгізу өрісін, «Қосу» батырмасын және бос <code>&lt;ul&gt;</code> тізімін жасаңыз.</li>
        <li>Батырма басылғанда <code>document.createElement('li')</code> арқылы жаңа тапсырма элементін қосыңыз.</li>
        <li>Әр тапсырманың жанына «Орындалды» (мәтінді сызу) және «Жою» (<code>element.remove()</code>) батырмаларын іске асырыңыз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li><code>event.preventDefault()</code> әдісі қандай жағдайда қолданылады?</li>
        <li>Оқиғаларды делегациялау (Event Delegation) дегеніміз не?</li>
      </ul>
    `
  },
  {
    title: "Fetch API арқылы сыртқы серверден деректер жүктеу және көрсету",
    source: "JSONPlaceholder API (jsonplaceholder.typicode.com)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>Асинхронды сұраулар жіберу және JSON форматындағы жауаптарды бетке шығару.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li><code>async/await</code> және <code>fetch()</code> қолданып, <code>https://jsonplaceholder.typicode.com/posts?_limit=10</code> мекенжайынан 10 жазбаны жүктеңіз.</li>
        <li>Деректер жүктеліп жатқанда «Жүктелуде...» индикаторын көрсетіңіз.</li>
        <li>Алынған деректерді карточкалар түрінде бетке шығарып, <code>try/catch</code> арқылы желі қателерін өңдеңіз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li><code>response.json()</code> әдісі не қайтарады?</li>
        <li>Неліктен <code>fetch</code> сұрауларын <code>try/catch</code> блогына орау қажет?</li>
      </ul>
    `
  },
  {
    title: "LocalStorage көмегімен «Қараңғы/Жарық тақырып» және себетті сақтау",
    source: "MDN Web Docs — Window.localStorage (developer.mozilla.org)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>Бетті қайта жүктегеннен кейін де пайдаланушы баптауларын сақтап қалуды үйрену.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li>Бетке «Тақырыпты ауыстыру» (Dark / Light Mode) батырмасын қосыңыз.</li>
        <li>Таңдалған режимді <code>localStorage.setItem('theme', ...)</code> арқылы сақтаңыз.</li>
        <li>Бет ашылған кезде <code>localStorage.getItem('theme')</code> мәнін тексеріп, сақталған тақырыпты автоматты түрде қолданыңыз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li>LocalStorage пен SessionStorage арасындағы басты айырмашылық неде?</li>
        <li>LocalStorage-те массивті қалай сақтауға болады?</li>
      </ul>
    `
  },
  {
    title: "Git репозиторийін баптау және жобаны GitHub Pages-ке орналастыру",
    source: "GitHub Docs — GitHub Pages Quickstart (docs.github.com/pages)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>Жоба кодтарын GitHub-қа жүктеу және оны интернетте ашық сілтеме ретінде жариялау.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li>GitHub-та жаңа ашық (Public) репозиторий құрыңыз.</li>
        <li>Жоба файлдарын (<code>index.html</code>, CSS және JS файлдарын) репозиторийге жүктеңіз.</li>
        <li>Репозиторий баптауларынан (<strong>Settings → Pages</strong>) <code>main</code> тармағын таңдап, GitHub Pages-ті іске қосыңыз.</li>
        <li>Дайын сілтеменің жұмыс істеуін тексеріңіз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li><code>.gitignore</code> файлы не үшін қажет?</li>
        <li><code>git pull</code> және <code>git push</code> командаларының қызметі қандай?</li>
      </ul>
    `
  },
  {
    title: "Компоненттік архитектура негізінде интерактивті есептегіш және сүзгі құру",
    source: "React Docs — Thinking in React (react.dev/learn/thinking-in-react)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>Интерфейсті тәуелсіз күйі (State) бар компоненттерге бөлу принципін меңгеру.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li>Қайта қолданылатын <code>CardComponent(title, category, price)</code> функциясын немесе React компонентін жасаңыз.</li>
        <li>Күйді басқару (<code>state</code>) арқылы тауарларды санат бойынша сүзетін батырмалар («Барлығы», «Ноутбуктер», «Смартфондар») қосыңыз.</li>
        <li>Іздеу жолағына мәтін терген сайын тізімді нақты уақытта жаңартыңыз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li>Компоненттегі <code>props</code> пен <code>state</code> айырмашылығы неде?</li>
        <li>Virtual DOM қалай жұмыс істейді?</li>
      </ul>
    `
  },
  {
    title: "Node.js және Express.js көмегімен қарапайым веб-сервер құру",
    source: "Express.js — Hello world example (expressjs.com/en/starter/hello-world.html)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>Серверлік ортаны баптау және әртүрлі URL маршруттарына (Routes) жауап қайтаруды үйрену.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li>Жоба папкасында <code>npm init -y</code> және <code>npm install express</code> командаларын орындаңыз.</li>
        <li><code>server.js</code> файлын жасап, <code>GET /</code>, <code>GET /about</code> және <code>GET /api/info</code> маршруттарын іске асырыңыз.</li>
        <li>Серверді <code>3000</code> портында іске қосып, шолғыш арқылы JSON жауабын тексеріңіз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li><code>package.json</code> файлында қандай ақпарат сақталады?</li>
        <li>Express.js-тегі Middleware (аралық өңдеуші) дегеніміз не?</li>
      </ul>
    `
  },
  {
    title: "Кітаптар тізімін басқаруға арналған REST API жобалау (GET, POST, DELETE)",
    source: "MDN Web Docs — Express/Node introduction (developer.mozilla.org)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>CRUD операцияларын қолдайтын толыққанды RESTful API маршруттарын әзірлеу.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li>Сервер жадында кітаптар массивін (<code>id</code>, <code>title</code>, <code>author</code>) сақтаңыз.</li>
        <li><code>GET /api/books</code> — барлық кітаптар тізімін қайтару.</li>
        <li><code>POST /api/books</code> — сұрау денесінен (<code>req.body</code>) жаңа кітап қосу және <code>201 Created</code> кодын қайтару.</li>
        <li><code>DELETE /api/books/:id</code> — ID бойынша кітапты өшіру.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li><code>200</code>, <code>201</code> және <code>400</code> HTTP статустары қай кезде қайтарылады?</li>
        <li><code>express.json()</code> middleware не үшін қажет?</li>
      </ul>
    `
  },
  {
    title: "Веб-сайттың қауіпсіздік аудиті және Lighthouse арқылы өнімділікті тексеру",
    source: "Google Chrome Lighthouse құжаттамасы (developer.chrome.com/docs/lighthouse)",
    html: `
      <h3>Тапсырманың мақсаты</h3>
      <p>Дайын веб-қосымшаның өнімділігін, қолжетімділігін және қауіпсіздік деңгейін бағалау.</p>
      <h3>Орындау барысы</h3>
      <ol>
        <li>Дайын электрондық оқу құралын немесе портфолио сайтын Chrome шолғышында ашыңыз.</li>
        <li>DevTools ішіндегі <strong>Lighthouse</strong> бөліміне өтіп, <em>Performance</em>, <em>Accessibility</em>, <em>Best Practices</em> және <em>SEO</em> көрсеткіштері бойынша есепті іске қосыңыз.</li>
        <li>Пайдаланушы енгізетін мәтіндерде <code>innerHTML</code> орнына <code>textContent</code> қолдану арқылы XSS шабуылынан қорғанысты тексеріңіз.</li>
      </ol>
      <h3>Бақылау сұрақтары</h3>
      <ul>
        <li>XSS шабуылы қалай жүзеге асады және одан қалай қорғанамыз?</li>
        <li>Lighthouse есебіндегі Performance көрсеткішін жақсартудың 3 жолын атаңыз.</li>
      </ul>
    `
  }
];