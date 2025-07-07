class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<style>
			nav {
				padding: 15px;
				background: var(--dark_green);
				width: 100%;
				display: flex;
				justify-content: flex-end;
				gap: 7%;
			}
			#end-header {
				margin-right: 30px;
			}
		</style>
		<nav>
			<a class="top-links" href="/index.html"><button><h1>Home</h1></button></a>
			<a class="top-links" href="/pages/blog/home.html"><button><h1>Blog</h1></button></a>
			<a class="top-links" id="end-header" href="/pages/wiki/home.html"><button><h1>Wiki</h1></button></a>
			</nav>
		`;
	}
}

customElements.define('header-component', Header);
