class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<style>
* {
	margin: 0;
	padding: 0;
}

:root {
	--dark_green: #084d15;
	--background: #1c792e;
	--text_backing: #7ad993;
	--accent: #214f2a;
	--popup: #0a6b1d;
	--menu: #13912c;
	--footer_length: 122px;
}
body {
	background: var(--background);
	color: white;
}

.header {
	padding: 15px;
	position: fixed;
	background: var(--dark_green);
	width: 100%;
	display: flex;
	justify-content: flex-end;
	gap 7%;
}

#end-header {
	margin-right: 30px;
}

#title {
	padding-top: 174px;
	padding-bottom: 50px;
	text-align: center;
}

.mobile-dropdown {
	display: none;
}

.top-links > button {
	background: var(--dark_green);
	color: white;
	padding: 10px 15px;
	border: none;
	cursor: pointer;
}
.mobile-dropdown > button {
	background: var(--dark_green);
	color: white;
	padding: 10px 15px;
	border: none;
	cursor: pointer;
}
@media only screen and (max-width: 950px) {
	.content2 {
		width: 95%;
		grid-template-columns: auto;
	}
	.links {
		display: none;
	}
	.top-links {
		display: none;
	}
	.mobile-dropdown {
		display: inline-block;
	}
	.header {justify-content: flex-start; gap: 0;}
}
</style>
<div class='header'>
	<div class="dropdown">
		<div class="mobile-dropdown">
			<button><h1>==</h1></button>
			<div class="content">
				<a href="/index.html">home</a>
				<a href="/pages/blog/home.html">blog</a>
				<a href="/pages/wiki/home.html">wiki</a>
				<a href="/pages/digging_table.html">digging</a>
			</div>
		</div>
	</div>
	<a class="top-links" href="/index.html"><button><h1>Home</h1></button></a>
	<a class="top-links" href="/pages/blog/home.html"><button><h1>Blog</h1></button></a>
	<a class="top-links" id="end-header" href="/pages/wiki/home.html"><button><h1>Wiki</h1></button></a>
</div>
          `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<style>
* {
	margin: 0;
	padding: 0;
}

:root {
	--dark_green: #084d15;
	--background: #1c792e;
	--text_backing: #7ad993;
	--accent: #214f2a;
	--popup: #0a6b1d;
	--menu: #13912c;
	--footer_length: 122px;
}
.footer {
	display: grid;
	grid-template-columns: 50% 50%;
	justify-content: space-evenly;
	text-align: center;
	align-items: stretch;
	background: var(--dark_green);;
	width: 100%;
	padding: 50px 0 50px 0;
}
body {
	background: var(--background);
	color: white;
}

</style>
<div class="footer">
	<div id="left">
		<p>Reach me at my email:</p>
	</div>
	<div id="right">
		<ul sytle="list-style-type:none;">
			<li><a href="mailto: throwablebricks@proton.me">throwablebricks@proton.me</a></li>
		</ul>
	</div>
</div>
          `;
  }
}

customElements.define('header-component', Header);
customElements.define('footer-component', Footer);
