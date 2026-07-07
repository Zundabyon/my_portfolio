/* ==========================================================
   ▼▼▼ DATA:ここを編集すればコンテンツを更新できます ▼▼▼
   ========================================================== */

// --- クエスト(制作アプリ) ---
// shot: スクリーンショット画像のパスを入れると表示されます(例: "images/savedata.png")
const APPS = [
  {
    name:"SaveData", rank:"★★★ メインクエスト",
    desc:"「ゲームの思い出」を記録するRPG風メモリートラッカー。IGDB APIでゲーム情報を取得し、AI占い機能「占いおばばの部屋」も搭載。",
    tech:["Rails 7.2","PostgreSQL (Neon)","Tailwind CSS","Hotwire","Docker","Render","IGDB API","Claude API","FastAPI","RSpec (カバレッジ約93%)"],
    url:"https://savedata.quest", repo:"https://github.com/Zundabyon/SaveData",
    shot:""
  },
  {
    name:"AreaGo", rank:"★★ サイドクエスト",
    desc:"エリアトラウト(管理釣り場)の釣果を記録するPWA。Stimulusによるルアーのカスケード選択が特徴。趣味×技術の一作。",
    tech:["Rails 8","PWA","Stimulus","Neon PostgreSQL","Render"],
    url:"", repo:"",
    shot:""
  },
  {
    name:"ぼくの・わたしのえほん", rank:"★★ サイドクエスト",
    desc:"子ども向けの絵本を作れるアプリ。Laravel学習の集大成として開発し、Railwayにデプロイ。",
    tech:["Laravel","PHP","Railway"],
    url:"", repo:"",
    shot:""
  },
  {
    name:"ひえひえ小説", rank:"★ ミニクエスト",
    desc:"ホラー・ミステリー小説のレコメンドアプリ。ReactプロトタイプをERB/Stimulusへ移植し、Docker/CI環境やRSpecテストも整備。",
    tech:["Rails","ERB","Stimulus","Docker","RSpec"],
    url:"", repo:"",
    shot:""
  },
];

// --- そうび(スタック) ---
// gh: GitHubの言語名(配列)。リポジトリのコミット数からLvを自動計算します。
//     "TOTAL" は全リポジトリのコミット合計。null はコミットから測れないため lv(自己評価値)をそのまま表示。
// lv: GitHubから取得できなかったときのフォールバック値(1〜99)
const GITHUB_USER = "Zundabyon";
const STACK = [
  { name:"Ruby / Rails",  role:"武器:つかいこんだ剣", lv:78, gh:["Ruby"] },
  { name:"PHP / Laravel", role:"武器:二本目の剣", lv:55, gh:["PHP","Blade"] },
  { name:"JavaScript",    role:"魔法:基本呪文", lv:50, gh:["JavaScript","TypeScript"] },
  { name:"Vue.js",        role:"魔法:習得中の新呪文", lv:35, gh:["Vue"] },
  { name:"HTML / CSS",    role:"服:みための整え", lv:60, gh:["HTML","CSS"] },
  { name:"RSpec / テスト", role:"盾:カバレッジ93%の守り", lv:70, gh:null },
  { name:"Docker",        role:"乗り物:どこでも動く箱", lv:55, gh:["Dockerfile"] },
  { name:"PostgreSQL",    role:"アイテム:データのつぼ", lv:55, gh:null },
  { name:"Git / GitHub",  role:"アイテム:時をもどす砂時計", lv:65, gh:"TOTAL" },
  { name:"Python / FastAPI", role:"魔法:召喚補助", lv:30, gh:["Python"] },
];

// --- しゅぎょうの間(コード壁打ちのお題) ---
// lang:"js" かつ runnable:true のお題はブラウザで実行&自動判定されます。
// tests: fn(入力) の結果が expect と一致するかをチェック。fnName は定義してもらう関数名。
// runnable:false のお題(Rubyなど)は模範解答と見比べる形式です。
const TRAINING = [
  {
    id:"js-map", lv:1, lang:"JS", runnable:true, xp:10,
    title:"スライムの群れを2倍にせよ(map)",
    desc:"関数 double(arr) を定義せよ。数値の配列を受け取り、各要素を2倍にした新しい配列を返すのだ。",
    starter:"function double(arr) {\n  // ここにコードを書く\n}",
    fnName:"double",
    tests:[ {args:[[1,2,3]], expect:[2,4,6]}, {args:[[10,0,-5]], expect:[20,0,-10]} ],
    answer:"function double(arr) {\n  return arr.map(n => n * 2);\n}"
  },
  {
    id:"js-filter", lv:1, lang:"JS", runnable:true, xp:10,
    title:"偶数のたましいだけを集めよ(filter)",
    desc:"関数 evens(arr) を定義せよ。数値の配列から偶数だけを取り出した新しい配列を返すのだ。",
    starter:"function evens(arr) {\n  // ここにコードを書く\n}",
    fnName:"evens",
    tests:[ {args:[[1,2,3,4,5,6]], expect:[2,4,6]}, {args:[[7,9]], expect:[]} ],
    answer:"function evens(arr) {\n  return arr.filter(n => n % 2 === 0);\n}"
  },
  {
    id:"js-reduce", lv:2, lang:"JS", runnable:true, xp:15,
    title:"ゴールドの合計を計算せよ(reduce)",
    desc:"関数 total(arr) を定義せよ。数値の配列の合計を返すのだ。reduceを使うと経験値が高いぞ。",
    starter:"function total(arr) {\n  // ここにコードを書く\n}",
    fnName:"total",
    tests:[ {args:[[100,250,50]], expect:400}, {args:[[]], expect:0} ],
    answer:"function total(arr) {\n  return arr.reduce((sum, n) => sum + n, 0);\n}"
  },
  {
    id:"js-destructure", lv:2, lang:"JS", runnable:true, xp:15,
    title:"宝箱から名前を取り出せ(分割代入)",
    desc:"関数 heroName(obj) を定義せよ。{ name, job } の形のオブジェクトから、分割代入で name を取り出して返すのだ。",
    starter:"function heroName(obj) {\n  // 分割代入を使ってみよう\n}",
    fnName:"heroName",
    tests:[ {args:[{name:"めたっぴ", job:"engineer"}], expect:"めたっぴ"} ],
    answer:"function heroName(obj) {\n  const { name } = obj;\n  return name;\n}"
  },
  {
    id:"js-ref", lv:3, lang:"JS", runnable:true, xp:20,
    title:"Vueのref()を自作せよ(リアクティビティ入門)",
    desc:"関数 myRef(v) を定義せよ。{ value: v } の形のオブジェクトを返すのだ。Vueの ref() が「.valueで読み書きする箱」であることを体感する修行だぞ。",
    starter:"function myRef(v) {\n  // ここにコードを書く\n}",
    fnName:"myRef",
    tests:[ {args:[0], expect:{value:0}}, {args:["zunda"], expect:{value:"zunda"}} ],
    answer:"function myRef(v) {\n  return { value: v };\n}"
  },
  {
    id:"rb-map", lv:1, lang:"Ruby", runnable:false, xp:10,
    title:"【Ruby】配列を変換せよ(map)",
    desc:"配列 [1, 2, 3] の各要素を2倍にした配列を返すコードを書いてみよ。書けたら模範解答と見比べるのだ。",
    starter:"# ここにRubyコードを書く\narr = [1, 2, 3]\n",
    answer:"arr = [1, 2, 3]\narr.map { |n| n * 2 }\n# => [2, 4, 6]"
  },
  {
    id:"rb-each-index", lv:2, lang:"Ruby", runnable:false, xp:15,
    title:"【Ruby】番号つきで表示せよ(each_with_index)",
    desc:"配列 [\"すぐる\", \"つよし\", \"ひかる\"] を「1: すぐる」の形式で出力するコードを書いてみよ。",
    starter:"# ここにRubyコードを書く\nnames = [\"すぐる\", \"つよし\", \"ひかる\"]\n",
    answer:"names = [\"すぐる\", \"つよし\", \"ひかる\"]\nnames.each_with_index do |name, i|\n  puts \"#{i + 1}: #{name}\"\nend"
  },
  {
    id:"rb-n1", lv:3, lang:"Rails", runnable:false, xp:20,
    title:"【Rails】N+1問題をたおせ(includes)",
    desc:"Post一覧で post.user.name を表示するとN+1が発生する。これを防ぐクエリを書いてみよ。面接頻出の強敵だぞ。",
    starter:"# N+1が発生する例\n# posts = Post.all\n# 対策後のコードを書く:\n",
    answer:"posts = Post.includes(:user)\n# eager loadingでUserをまとめて取得し、\n# ループ内の post.user.name でクエリが発行されなくなる"
  },
];

// --- つうしんの間(リンク) ---
const LINKS = [
  { label:"GitHub - Zundabyon", url:"https://github.com/Zundabyon", note:"コードはすべてここに。SaveDataのリポジトリもあります" },
  { label:"SaveData(ポートフォリオ本体)", url:"https://savedata.quest", note:"ゲームの思い出を記録するRPG風アプリ" },
  { label:"X - @zundabyon", url:"https://x.com/zundabyon", note:"学習と開発の日々のつぶやき" },
  { label:"Qiita - metappi", url:"https://qiita.com/metappi", note:"学んだことのアウトプット記事" },
  { label:"YouTube - ずんだびょん", url:"https://www.youtube.com/@zundabyon", note:"津軽弁ずんだもんのゲーム実況・解説チャンネル" },
  { label:"まなびの書庫(Notion)", url:"https://app.notion.com/p/29e905f28407803a997dd04b6db0ad84", note:"学習記録をまとめたライブラリ" },
];

// プロフィール画面の冒頭メッセージ(タイプライター表示)
const PROLOGUE = "おお めたっぴ!\nよくぞ この冒険の書を ひらいてくれた。\nここには エンジニアを目指す旅の きろくが しるされている……。";

/* ==========================================================
   ▲▲▲ DATAここまで / 以下はゲームエンジン部分 ▲▲▲
   ========================================================== */

const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];

// ---------- シーン切り替え ----------
function goto(scene){
  $$(".scene").forEach(s => s.classList.toggle("active", s.dataset.scene === scene));
  window.scrollTo(0,0);
  if(scene === "profile") typePrologue();
  if(scene === "stack") initStack();
}
document.addEventListener("click", e => {
  const ext = e.target.closest("[data-href]");
  if(ext){ window.open(ext.dataset.href, "_blank", "noopener"); return; }
  const btn = e.target.closest("[data-goto]");
  if(btn) goto(btn.dataset.goto);
});

// ---------- タイトル画面:キーボード操作 ----------
const menuItems = $$("#title-menu li");
let menuIdx = 0;
function renderMenu(){
  menuItems.forEach((li,i)=>li.classList.toggle("selected", i===menuIdx));
}
document.addEventListener("keydown", e => {
  if(!$('[data-scene="title"]').classList.contains("active")) return;
  if(e.key === "ArrowDown"){ menuIdx = (menuIdx+1)%menuItems.length; renderMenu(); e.preventDefault(); }
  if(e.key === "ArrowUp"){ menuIdx = (menuIdx-1+menuItems.length)%menuItems.length; renderMenu(); e.preventDefault(); }
  if(e.key === "Enter"){ $("button", menuItems[menuIdx]).click(); }
});
menuItems.forEach((li,i)=> li.addEventListener("mouseenter", ()=>{ menuIdx=i; renderMenu(); }));

// ---------- タイプライター ----------
let typeTimer = null;
function typePrologue(){
  const el = $("#prologue-msg");
  clearInterval(typeTimer);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduced){ el.textContent = PROLOGUE; return; }
  el.textContent = "";
  let i = 0;
  typeTimer = setInterval(()=>{
    if(i >= PROLOGUE.length){
      clearInterval(typeTimer);
      el.insertAdjacentHTML("beforeend", ' <span class="cursor-down">▼</span>');
      return;
    }
    el.textContent += PROLOGUE[i] === "\n" ? "\n" : PROLOGUE[i];
    el.style.whiteSpace = "pre-wrap";
    i++;
  }, 45);
}

// ---------- クエスト ----------
const qList = $("#quest-list");
APPS.forEach(a=>{
  const div = document.createElement("div");
  div.className = "rpg-win quest-card";
  const shot = a.shot
    ? `<div class="q-shot"><img src="${a.shot}" alt="${a.name}のスクリーンショット"></div>`
    : `<div class="q-shot">スクリーンショット準備中(DATAのshotに画像パスを設定)</div>`;
  const links = [
    a.url  ? `<a href="${a.url}" target="_blank" rel="noopener">▶ アプリをあそぶ</a>` : "",
    a.repo ? `<a href="${a.repo}" target="_blank" rel="noopener">▶ GitHubを見る</a>` : "",
  ].filter(Boolean).join("");
  div.innerHTML = `
    <p><span class="q-title">${a.name}</span><span class="badge-clear">CLEAR</span><span class="q-rank">${a.rank}</span></p>
    <p class="q-desc">${a.desc}</p>
    ${shot}
    <div class="q-tech">${a.tech.map(t=>`<span>${t}</span>`).join("")}</div>
    <div class="q-links">${links}</div>`;
  qList.appendChild(div);
});

// ---------- そうび(GitHubコミット数連動) ----------
const stackList = $("#stack-list");
let ghLoaded = false;

function renderStack(){
  stackList.innerHTML = "";
  STACK.forEach(s=>{
    const row = document.createElement("div");
    row.className = "stack-row";
    const cmt = s.commits != null ? ` ・コミット数 ${s.commits}` : "";
    row.innerHTML = `
      <span class="s-name">${s.name}</span>
      <div class="gauge"><i data-lv="${s.lv}"></i></div>
      <span class="s-lv">Lv.${s.lv}</span>
      <span class="s-role">${s.role}${cmt}</span>`;
    stackList.appendChild(row);
  });
}
function animateGauges(){
  $$(".gauge i").forEach(g=>{
    g.style.width = "0";
    requestAnimationFrame(()=>requestAnimationFrame(()=>{ g.style.width = g.dataset.lv + "%"; }));
  });
}
// コミット数 → Lv 変換(対数スケール:10コミットでLv33、100でLv66、1000でLv99)
// 調整したいときは係数 33 を変えてください
function lvFromCommits(c){
  return Math.min(99, Math.max(10, Math.round(Math.log10(c + 1) * 33)));
}
async function loadGitHubLevels(){
  const status = $("#gh-status");
  status.textContent = "▶ GitHubからコミット数を取得中…";
  try{
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`);
    const repos = await res.json();
    if(!Array.isArray(repos)) throw new Error("APIレート制限中かもしれません");
    const counts = {};
    let total = 0;
    for(const repo of repos){
      if(repo.fork) continue;
      const r = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${repo.name}/commits?per_page=1`);
      if(!r.ok) continue;
      let c = 1;
      const link = r.headers.get("Link");
      if(link){
        const m = link.match(/page=(\d+)>; rel="last"/);
        if(m) c = Number(m[1]);
      }
      const lang = repo.language || "その他";
      counts[lang] = (counts[lang] || 0) + c;
      total += c;
    }
    STACK.forEach(s=>{
      if(s.gh === "TOTAL"){
        s.commits = total;
        s.lv = lvFromCommits(total);
      }else if(Array.isArray(s.gh)){
        const c = s.gh.reduce((sum, l)=>sum + (counts[l] || 0), 0);
        if(c > 0){ s.commits = c; s.lv = lvFromCommits(c); }
      }
    });
    ghLoaded = true;
    status.textContent = `※ Lvは GitHub(@${GITHUB_USER})のコミット数から自動算出(総コミット ${total})。コミット数のない項目は自己評価値です。`;
    renderStack();
    animateGauges();
  }catch(e){
    status.textContent = "※ GitHubからの取得に失敗したため自己評価のLvを表示中(APIレート制限の場合は時間をおくと回復します)";
  }
}
function initStack(){
  renderStack();
  animateGauges();
  if(!ghLoaded) loadGitHubLevels();
}

// ---------- しゅぎょうの間 ----------
let xp = 0;
const doneSet = new Set();
// GitHub Pagesで公開したときは進捗を保存(プレビュー環境では保存されなくてもOKなようにtry/catch)
try{
  xp = Number(localStorage.getItem("metappi_xp") || 0);
  JSON.parse(localStorage.getItem("metappi_done") || "[]").forEach(id=>doneSet.add(id));
}catch(e){ /* 保存できない環境ではセッション内のみ */ }

function saveProgress(){
  try{
    localStorage.setItem("metappi_xp", String(xp));
    localStorage.setItem("metappi_done", JSON.stringify([...doneSet]));
  }catch(e){ /* noop */ }
}
function levelOf(x){ return Math.floor(x / 30) + 1; }
function renderStatus(){
  $("#xp-val").textContent = xp;
  $("#lv-val").textContent = levelOf(xp);
  $("#clear-count").textContent = `クリア: ${doneSet.size} / ${TRAINING.length}`;
}

const tqList = $("#tq-list");
let currentQ = null;
TRAINING.forEach(q=>{
  const btn = document.createElement("button");
  btn.className = "tq-item";
  btn.id = "tq-" + q.id;
  btn.innerHTML = `<span>${q.title}</span><span class="tq-lv">Lv.${q.lv} / ${q.lang}</span>`;
  if(doneSet.has(q.id)) btn.classList.add("done");
  btn.addEventListener("click", ()=>openQuest(q));
  tqList.appendChild(btn);
});

function openQuest(q){
  currentQ = q;
  $("#editor-panel").classList.add("open");
  $("#tq-title").textContent = `▶ ${q.title}(EXP +${q.xp})`;
  $("#tq-desc").textContent = q.desc;
  $("#code-area").value = q.starter;
  $("#answer-box").classList.remove("open");
  $("#answer-box").textContent = q.answer;
  $("#btn-run").style.display = q.runnable ? "" : "none";
  $("#btn-selfdone").style.display = q.runnable ? "none" : "";
  $("#battle-log").innerHTML = q.runnable
    ? "▶ コードを書いて「たたかう」をおすのだ!"
    : "▶ このお題はブラウザ実行不可の言語だ。書けたら模範解答と見比べて「じぶんで確認できた!」をおすのだ。";
  $("#editor-panel").scrollIntoView({behavior:"smooth", block:"start"});
}

function deepEq(a,b){ return JSON.stringify(a) === JSON.stringify(b); }

$("#btn-run").addEventListener("click", ()=>{
  if(!currentQ || !currentQ.runnable) return;
  const code = $("#code-area").value;
  const log = $("#battle-log");
  let html = "めたっぴの こうげき!\n";
  try{
    const fn = new Function(code + `\nreturn typeof ${currentQ.fnName} !== "undefined" ? ${currentQ.fnName} : undefined;`)();
    if(typeof fn !== "function") throw new Error(`関数 ${currentQ.fnName} が見つからないのだ`);
    let allOk = true;
    currentQ.tests.forEach((t,i)=>{
      const result = fn(...t.args.map(a=>JSON.parse(JSON.stringify(a))));
      const ok = deepEq(result, t.expect);
      allOk = allOk && ok;
      html += ok
        ? `<span class="ok">テスト${i+1}: せいこう! ${currentQ.fnName}(${t.args.map(a=>JSON.stringify(a)).join(", ")}) => ${JSON.stringify(result)}</span>\n`
        : `<span class="ng">テスト${i+1}: しっぱい… 期待値 ${JSON.stringify(t.expect)} / 実際 ${JSON.stringify(result)}</span>\n`;
    });
    if(allOk){
      html += clearQuest(currentQ);
    }else{
      html += "▶ おしい! コードを見直して もういちど挑むのだ。";
    }
    log.innerHTML = html;
  }catch(err){
    log.innerHTML = html + `<span class="ng">エラーが発生! ${String(err.message || err)}</span>\n▶ 構文をたしかめるのだ。`;
  }
});

$("#btn-selfdone").addEventListener("click", ()=>{
  if(!currentQ || currentQ.runnable) return;
  $("#battle-log").innerHTML = "模範解答と見比べて 理解をふかめた!\n" + clearQuest(currentQ);
});

function clearQuest(q){
  let msg = "";
  if(!doneSet.has(q.id)){
    doneSet.add(q.id);
    xp += q.xp;
    const before = levelOf(xp - q.xp), after = levelOf(xp);
    msg += `<span class="gain">お題をクリア! けいけんち ${q.xp} を かくとく!</span>\n`;
    if(after > before) msg += `<span class="gain">★ めたっぴは レベル${after} に あがった!</span>\n`;
    $("#tq-" + q.id).classList.add("done");
    saveProgress();
    renderStatus();
  }else{
    msg += `<span class="gain">クリアずみのお題だが、良い復習になったのだ!</span>\n`;
  }
  return msg;
}

$("#btn-answer").addEventListener("click", ()=>{
  $("#answer-box").classList.toggle("open");
});

// ---------- つうしんの間 ----------
const linkList = $("#link-list");
LINKS.forEach(l=>{
  const li = document.createElement("li");
  li.innerHTML = `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a><span class="l-note">${l.note || ""}</span>`;
  linkList.appendChild(li);
});

renderStatus();