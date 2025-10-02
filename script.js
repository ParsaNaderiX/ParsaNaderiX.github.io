// Hamburger menu toggle with accessibility and slide-out functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

if (hamburger && navLinks && mobileMenuOverlay) {
    const toggleMenu = (open) => {
        const isOpen = open ?? !navLinks.classList.contains('active');
        
        // Toggle menu and overlay
        navLinks.classList.toggle('active', isOpen);
        mobileMenuOverlay.classList.toggle('active', isOpen);
        hamburger.classList.toggle('active', isOpen);
        
        // Update accessibility attributes
        hamburger.setAttribute('aria-expanded', String(isOpen));
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    // Hamburger click handler
    hamburger.addEventListener('click', () => toggleMenu());

    // Overlay click handler (close menu when clicking outside)
    mobileMenuOverlay.addEventListener('click', () => toggleMenu(false));

    // Keyboard navigation
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
        if (e.key === 'Escape') {
            toggleMenu(false);
        }
    });

    // Close menu when link clicked (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Close menu on window resize to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            toggleMenu(false);
        }
    });
}
