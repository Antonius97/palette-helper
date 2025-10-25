<script>
	// No props needed; uses CSS variables from parent `main#content`
</script>

<div class="site">
	<header class="site__header">
		<div class="container">
			<div class="brand">Palette Helper</div>
			<nav class="nav">
				<a href="#features">Features</a>
				<a href="#gallery">Gallery</a>
				<a href="#pricing">Pricing</a>
				<a class="btn btn--ghost" href="#login">Sign in</a>
				<a class="btn btn--accent" href="#get-started">Get started</a>
			</nav>
		</div>
	</header>

	<section class="hero">
		<div class="container">
			<div class="hero__content">
				<h1>Design faster with your palette</h1>
				<p>Create harmonious color systems and preview them instantly on a realistic page.</p>
				<div class="hero__actions">
					<a class="btn btn--accent" href="#get-started">Try it now</a>
					<a class="btn btn--ghost" href="#learn-more">Learn more</a>
				</div>
				<div class="badges">
					<span class="badge badge--success">Success</span>
					<span class="badge badge--danger">Danger</span>
					<span class="badge badge--warning">Warning</span>
					<span class="badge badge--info">Info</span>
				</div>
			</div>
			<div class="hero__media">
				<div class="card card--elevated">
					<div class="card__header">Preview Widget</div>
					<div class="card__body">
						<div class="stat">
							<div class="stat__label">Primary</div>
							<div class="stat__value" style="background: var(--primary-color);"></div>
						</div>
						<div class="stat">
							<div class="stat__label">Secondary</div>
							<div class="stat__value" style="background: var(--secondary-color);"></div>
						</div>
						<div class="stat">
							<div class="stat__label">Accent</div>
							<div class="stat__value" style="background: var(--accent-color);"></div>
						</div>
						<div class="stat">
							<div class="stat__label">Light</div>
							<div class="stat__value" style="background: var(--light-color); border: 1px solid var(--secondary-color);"></div>
						</div>
						<div class="stat">
							<div class="stat__label">Dark</div>
							<div class="stat__value" style="background: var(--dark-color);"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="features" class="features">
		<div class="container">
			<div class="feature">
				<div class="feature__icon feature__icon--accent"></div>
				<div class="feature__content">
					<h3>Live preview</h3>
					<p>All elements use CSS variables so your palette updates everywhere instantly.</p>
				</div>
			</div>
			<div class="feature">
				<div class="feature__icon feature__icon--secondary"></div>
				<div class="feature__content">
					<h3>Accessible by default</h3>
					<p>High contrast text color is computed from your background automatically.</p>
				</div>
			</div>
			<div class="feature">
				<div class="feature__icon feature__icon--dark"></div>
				<div class="feature__content">
					<h3>Flexible palettes</h3>
					<p>Play with complementary, triadic, and gradient rules to explore options.</p>
				</div>
			</div>
		</div>
	</section>

	<section id="gallery" class="cards">
		<div class="container grid">
			<div class="card card--light">
				<div class="card__header">Card title</div>
				<div class="card__body">This is a card using your colors.</div>
				<div class="card__footer">
					<button class="btn btn--accent">Action</button>
					<button class="btn btn--ghost">Secondary</button>
				</div>
			</div>
			<div class="card">
				<div class="card__header">Another card</div>
				<div class="card__body">Buttons and headings inherit CSS variables.</div>
				<div class="card__footer">
					<button class="btn btn--accent">Action</button>
					<button class="btn btn--ghost">Secondary</button>
				</div>
			</div>
			<div class="card card--dark">
				<div class="card__header">One more</div>
				<div class="card__body">Great for testing contrast and emphasis.</div>
				<div class="card__footer">
					<button class="btn btn--light-bg">Action</button>
					<button class="btn btn--ghost-light">Secondary</button>
				</div>
			</div>
		</div>
	</section>

	<section class="alerts">
		<div class="container grid grid--2">
			<div class="alert alert--success">
				<strong>Success:</strong> Your palette passes contrast requirements.
			</div>
			<div class="alert alert--danger">
				<strong>Danger:</strong> Contrast is too low for body text.
			</div>
			<div class="alert alert--warning">
				<strong>Warning:</strong> Headings might be borderline; verify sizes.
			</div>
			<div class="alert alert--info">
				<strong>Info:</strong> Try adjusting saturation to improve readability.
			</div>
		</div>
	</section>

	<section id="pricing" class="pricing">
		<div class="container grid grid--3">
			<div class="plan">
				<h4>Starter</h4>
				<div class="price">Free</div>
				<ul>
					<li>Basic palettes</li>
					<li>Live preview</li>
					<li>Export colors</li>
				</ul>
				<button class="btn btn--accent">Choose</button>
			</div>
			<div class="plan plan--featured">
				<h4>Pro</h4>
				<div class="price">$9</div>
				<ul>
					<li>Advanced rules</li>
					<li>Contrast checker</li>
					<li>Custom typography</li>
				</ul>
				<button class="btn btn--accent">Upgrade</button>
			</div>
			<div class="plan">
				<h4>Team</h4>
				<div class="price">$29</div>
				<ul>
					<li>Collaboration</li>
					<li>Shared libraries</li>
					<li>Priority support</li>
				</ul>
				<button class="btn btn--accent">Contact</button>
			</div>
		</div>
	</section>

	<footer class="site__footer site__footer--dark">
		<div class="container">
			<div>© 2025 Palette Helper</div>
			<nav class="nav nav--footer">
				<a href="#privacy">Privacy</a>
				<a href="#terms">Terms</a>
				<a href="#contact">Contact</a>
			</nav>
		</div>
	</footer>
</div>

<style>
	.site {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		background: var(--background-color);
		color: var(--text-color);
	}

	.container {
		width: 100%;
		padding: var(--outer-padding);
	}

	.grid { display: grid; gap: 1rem; }
	.grid--2 { grid-template-columns: repeat(2, 1fr); }
	.grid--3 { grid-template-columns: repeat(3, 1fr); }

	.site__header {
		position: sticky;
		top: 0;
		z-index: 1;
		background: var(--background-color);
		border-bottom: 1px solid var(--secondary-color);
	}

	.site__header .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.brand {
		font-weight: 700;
		font-size: 1.125rem;
	}

	.nav a {
		text-decoration: none;
		margin-left: 1rem;
		opacity: 0.9;
	}
  .nav :not(.btn--solid):not(.btn--accent) {
    color: var(--text-color);
  }
	.nav a:hover { opacity: 1; }

	.hero {
		border-bottom: 1px solid var(--secondary-color);
		background: linear-gradient(
			to right,
			hsl(var(--palette-color-4)) 0%,
			var(--background-color) 60%
		);
	}

	.hero .container {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 2rem;
		align-items: center;
	}

	.hero__content h1 { font-size: var(--display-3-size); }
	.hero__content p { font-size: 1.125rem; margin: 0.75rem 0 1.25rem; opacity: 0.9; }

	.hero__actions { display: flex; gap: 0.75rem; }

	.badges { display: flex; gap: 0.5rem; margin-top: 1rem; flex-wrap: wrap; }
	.badge { padding: 0.25rem 0.5rem; border-radius: 0.375rem; font-weight: 600; font-size: 0.8125rem; }
	.badge--success { background: var(--success-color); color: var(--on-success-color); }
	.badge--danger { background: var(--danger-color); color: var(--on-danger-color); }
	.badge--warning { background: var(--warning-color); color: var(--on-warning-color); }
	.badge--info { background: var(--info-color); color: var(--on-info-color); }

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.625rem 1rem;
		border-radius: 0.5rem;
		border: 1px solid var(--secondary-color);
		font-weight: 600;
		text-decoration: none;
		cursor: pointer;
		transition: background-color 0.15s, color 0.15s, opacity 0.15s, transform 0.05s;
	}
	.btn:active { transform: translateY(1px); }
	.btn--accent { background: var(--accent-color); color: var(--background-color); border-color: var(--accent-color); }
	.btn--light-bg { background: var(--light-color); color: var(--dark-color); border-color: var(--dark-color); }
	.btn--ghost { background: transparent; color: var(--text-color); }
	.btn--ghost:hover { background: color-mix(in hsl, var(--secondary-color) 15%, transparent); }
	.btn--ghost-light { background: transparent; color: var(--light-color); border-color: var(--light-color); }

	.hero__media { display: flex; align-items: center; justify-content: center; }

	.card {
		background: var(--background-color);
		border: 1px solid var(--secondary-color);
		border-radius: 0.75rem;
		overflow: hidden;
	}
	.card--light { background: var(--light-color); color: var(--dark-color); }
	.card--dark { background: var(--dark-color); color: var(--light-color); border-color: var(--dark-color); }
	.card--elevated { box-shadow: 0 10px 30px color-mix(in hsl, var(--secondary-color) 25%, transparent); }
	.card__header { padding: 0.75rem 1rem; border-bottom: 1px solid var(--secondary-color); font-weight: 600; }
	.card__body { padding: 1rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; }
	.card__footer { padding: 0.75rem 1rem; border-top: 1px solid var(--secondary-color); display: flex; gap: 0.5rem; }

	.stat { display: grid; grid-template-columns: 1fr; gap: 0.25rem; align-items: center; }
	.stat__label { font-size: 0.875rem; opacity: 0.85; }
	.stat__value { height: 2rem; border-radius: 0.5rem; }

	.features { border-bottom: 1px solid var(--secondary-color); }
	.feature { display: grid; grid-template-columns: 3rem 1fr; gap: 1rem; padding: 1rem 0; }
	.feature__icon { width: 3rem; height: 3rem; border-radius: 0.75rem; background: var(--secondary-color); }
	.feature__icon--accent { background: var(--accent-color); }
	.feature__icon--secondary { background: var(--secondary-color); }
	.feature__icon--dark { background: var(--dark-color); }

	.cards .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
	.cards .card { display: flex; flex-direction: column; }

	.alerts .container { margin-top: -0.5rem; }
	.alert { padding: 0.75rem 1rem; border-radius: 0.5rem; border: 1px solid currentColor; }
	.alert--success { background: color-mix(in hsl, var(--success-color) 16%, transparent); color: var(--text-success-color); }
	.alert--danger { background: color-mix(in hsl, var(--danger-color) 16%, transparent); color: var(--text-danger-color); }
	.alert--warning { background: color-mix(in hsl, var(--warning-color) 20%, transparent); color: var(--text-warning-color); }
	.alert--info { background: color-mix(in hsl, var(--info-color) 16%, transparent); color: var(--text-info-color); }

	.pricing .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
	.plan { border: 1px solid var(--secondary-color); border-radius: 0.75rem; padding: 1rem; background: var(--background-color); }
	.plan--featured { outline: 3px solid var(--accent-color); }
	.plan .price { font-size: 2rem; font-weight: 700; margin: 0.5rem 0 0.75rem; }
	.plan ul { list-style: none; margin: 0 0 1rem; padding: 0; }
	.plan li { margin: 0.25rem 0; }

	.site__footer { border-top: 1px solid var(--secondary-color); }
	.site__footer--dark { background: var(--dark-color); color: var(--light-color); border-top-color: var(--dark-color); }
	.site__footer .container { display: flex; align-items: center; justify-content: space-between; }
	.nav--footer a { margin-left: 1rem; }
	.site__footer--dark .nav--footer a { color: var(--light-color); }

	@media (max-width: 1100px) {
		.hero .container { grid-template-columns: 1fr; }
		.grid--3 { grid-template-columns: 1fr; }
	}

	@media (max-width: 800px) {
		.cards .grid { grid-template-columns: 1fr; }
		.pricing .grid { grid-template-columns: 1fr; }
		.grid--2 { grid-template-columns: 1fr; }
	}
</style>
