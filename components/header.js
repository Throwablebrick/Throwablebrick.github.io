class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = 
		<div class='header'>
			<div class="dropdown">
				<div class="mobile-dropdown">
					<button><h1>==</h1></button>
					<div class="content">
						<a href="/index.html">home</a>
						<a href="/pages/wiki/home.html">wiki</a>
					</div>
				</div>
			</div>
			<a class="top-links" href="/index.html"><button><h1>Home</h1></button></a>
			<a class="top-links" href="/pages/blog/home.html"><button><h1>Blog</h1></button></a>
			<a class="top-links" id="end-header" href="/pages/wiki/home.html"><button><h1>Wiki</h1></button></a>
		</div>
	}
}

customElements.define('header-component', Header);
