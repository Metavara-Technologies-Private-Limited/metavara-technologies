const contentData = {
            'home': {
                title: '',
                content: ''
            },
            'about-metavara': {
                title: 'About Metavara',
                content: `
                    <p>Metavara Technologies Private Limited is a next-generation IT services and solutions company helping enterprises accelerate digital transformation through secure, scalable, and AI-driven technologies. We partner with organizations to modernize operations, enhance security, and unlock business value using innovative IT and AI solutions.</p>
                `
            },
            'leadership': {
                title: 'Leadership',
                content: `<p>Details Coming Soon</p>`
            },
            'digital-transformation': {
                title: 'Digital Transformation',
                content: `
                    <ul>
                        <li>Cloud migration</li>
                        <li>Application modernization</li>
                        <li>Process automation</li>
                        <li>Agile transformation</li>
                    </ul>
                `
            },
            'cyber-security': {
                title: 'Cyber Security',
                content: `
                    <ul>
                        <li>Enterprise security strategy</li>
                        <li>Risk & compliance</li>
                        <li>Threat detection</li>
                        <li>Security operations</li>
                    </ul>
                `
            },
            'it-consulting': {
                title: 'IT Consulting',
                content: `
                    <ul>
                        <li>Technology roadmap</li>
                        <li>Enterprise architecture</li>
                        <li>IT optimization</li>
                        <li>Delivery governance</li>
                    </ul>
                `
            },
            'it-solutions': {
                title: 'IT Solutions Provider',
                content: `
                    <ul>
                        <li>End-to-end design</li>
                        <li>Implementation</li>
                        <li>Managed services across cloud, apps, and infrastructure</li>
                    </ul>
                `
            },
            'ai-solutions': {
                title: 'AI-Based Solutions',
                content: `
                    <ul>
                        <li>Intelligent automation</li>
                        <li>Analytics</li>
                        <li>Predictive insights</li>
                        <li>AI-powered decision systems</li>
                    </ul>
                `
            },
            'our-work': {
                title: 'Our Work',
                content: `
                    <p>Metavara Technologies Private Limited is a next-generation IT services and solutions company helping enterprises accelerate digital transformation through secure, scalable, and AI-driven technologies. We partner with organizations to modernize operations, enhance security, and unlock business value using innovative IT and AI solutions.</p>
                `
            },
            'industries': {
                title: 'Industries',
                content: `
                    <p>At Metavara, we specialize in delivering cutting-edge solutions in:</p>
                    <div class="service-grid">
                        <div class="service-card">
                            <h3>Cyber Security</h3>
                            <p>Protecting your business with advanced, reliable security frameworks</p>
                        </div>
                        <div class="service-card">
                            <h3>AI Tools</h3>
                            <p>Harnessing the power of artificial intelligence to transform operations and decision-making</p>
                        </div>
                        <div class="service-card">
                            <h3>Digital Transformation</h3>
                            <p>Enabling seamless modernization of processes for enhanced efficiency and growth</p>
                        </div>
                    </div>
                    <div class="cta-box">
                        <h3>Ready to elevate your business with unstoppable technology?</h3>
                        <p>Connect with us to explore how we can partner for your success!</p>
                    </div>
                `
            },
            'our-services': {
                title: 'Our Services',
                content: `
                    <div class="service-grid">
                        <div class="service-card"><h3>Cyber Security</h3></div>
                        <div class="service-card"><h3>Agile</h3></div>
                        <div class="service-card"><h3>Program and Project Management</h3></div>
                        <div class="service-card"><h3>AI & ML</h3></div>
                        <div class="service-card"><h3>Application Development</h3></div>
                        <div class="service-card"><h3>Mobile Application Development</h3></div>
                        <div class="service-card"><h3>Digital Transformation</h3></div>
                    </div>
                `
            },
            'our-people': {
                title: 'Our People',
                content: `
                    <h2>Director</h2>
                    <div class="person-card">
                        <h3>Radhika Panchadara</h3>
                        <p>✉ radhika.reddy@metavaratechnologies.com</p>
                    </div>
                    
                    <h2>Founder</h2>
                    <div class="person-card">
                        <h3>TBD</h3>
                        <p>✉ TBD</p>
                    </div>
                    
                    <h2>Co-Founder</h2>
                    <div class="person-card">
                        <h3>TBD</h3>
                        <p>✉ TBD</p>
                    </div>
                `
            },
            'our-clients': {
                title: 'Our Clients',
                content: `
                    <h2>Analyst Recognition</h2>
                    <p>Coming Soon</p>
                    
                    <h2>Client Stories</h2>
                    <p>Coming Soon</p>
                    
                    <h2>Inside Stories</h2>
                    <p>Coming Soon</p>
                    
                    <h2>Social Media</h2>
                    <p>Coming Soon</p>
                    
                    <h2>Events</h2>
                    <p>Coming Soon</p>
                `
            },
            'careers': {
                title: 'Careers',
                content: `<p>TBD – Openings in Metavara</p>`
            },
            'contact': {
                title: 'Contact Us',
                content: `
                    <div class="contact-details">
                        <h2>Our Location</h2>
                        <p><strong>HNO01 SRIMAN NILAYAM</strong></p>
                        <p>MEENAKSHI LAYOUT</p>
                        <p>SIDDAPURA</p>
                        <p>Bangalore, Karnataka – 560066</p>
                        <p>India</p>
                    </div>
                `
            }
        };

      
        function showContent(contentId) {
    const content = contentData[contentId];
    const section = document.getElementById('contentSection');
    const heroSection = document.getElementById('heroSection');

    // 🔹 REMOVE active class from ALL menu items
    document.querySelectorAll('.nav-link, .dropdown-item').forEach(item => {
        item.classList.remove('active');
    });

    // 🔹 ADD active class to clicked menu item
    const clickedItem = document.querySelector(
        `[onclick="showContent('${contentId}')"]`
    );
    if (clickedItem) {
        clickedItem.classList.add('active');
    }

    // 🔹 Home logic
    if (contentId === 'home') {
        heroSection.style.display = 'flex';
        section.style.display = 'none';
    } else {
        heroSection.style.display = 'none';
        section.style.display = 'block';
        section.classList.add('no-hero');

        if (content) {
            section.innerHTML = `
                <h1>${content.title}</h1>
                ${content.content}
            `;
        }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
