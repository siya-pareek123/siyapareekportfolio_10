
        // Project Data
        const projectData = {
            1: {
                title: "Beauty Ecommerce App",
                category: "E-Commerce • Mobile App",
                description: "Designed a visually appealing e-commerce mobile application focused on enhancing the online shopping experience with clean interface, easy product navigation, secure checkout process, and personalized recommendations.",
                overview: [
                    "Created a comprehensive e-commerce platform for beauty products",
                    "Implemented intuitive navigation and search functionality",
                    "Designed secure checkout process with multiple payment options",
                    "Integrated personalized product recommendations based on user behavior",
                    "Focused on mobile-first responsive design approach"
                ],
                tools: ["Figma", "UI Design", "User Flow", "Prototyping", "Visual Design", "Responsive Design"],
                features: [
                    { icon: "ri-shopping-bag-line", title: "Product Catalog", desc: "Browse extensive beauty product collection" },
                    { icon: "ri-heart-line", title: "Wishlist", desc: "Save favorite products for later purchase" },
                    { icon: "ri-secure-payment-line", title: "Secure Checkout", desc: "Multiple payment options with encryption" }
                ],
                images: [
                    "image/Beauty Ecommerce App_home 2.png",
                    "image/Beauty Ecommerce App_sign up 2.png",
                    "image/Beauty Ecommerce App_product 3.png",
                    "image/Beauty Ecommerce App_cart 2.png",
                    "image/Beauty Ecommerce App_search6.png",
                    "image/Beauty Ecommerce App_wishist 5.png",
                    "image/Beauty Ecommerce App_checkout 5.png",
                    "image/Beauty Ecommerce App_notification 6.png",
                    "image/Beauty Ecommerce App_confirmation 7.png"
                ]
            },
            2: {
                title: "AI Health Care Assistant App",
                category: "Healthcare • AI",
                description: "Designed an AI-based health care mobile application by identifying problems and user needs. Developed user personas and user flow. Focused on simple navigation, clean layout, and user-friendly experience.",
                overview: [
                    "Conducted extensive user research to identify healthcare pain points",
                    "Created detailed user personas representing target audience",
                    "Designed intuitive user flows for seamless experience",
                    "Integrated AI-powered health recommendations",
                    "Ensured accessibility and inclusivity in design"
                ],
                tools: ["Figma", "User Research", "Personas", "User Flow", "AI Integration", "Accessibility"],
                features: [
                    { icon: "ri-ai-generate", title: "AI Assistant", desc: "Intelligent health recommendations and insights" },
                    { icon: "ri-user-smile-line", title: "User Personas", desc: "Designed for diverse user needs" },
                    { icon: "ri-shield-check-line", title: "Data Privacy", desc: "Secure handling of health information" }
                ],
                images: [
                    "image/AI Health Care Assistant App_00000.png",
                    "image/AI Health Care Assistant App_111.png",
                    "image/AI Health Care Assistant App_4.png",
                    "image/AI Health Care Assistant App_8.png",
                    "image/AI Health Care Assistant App_9.png",
                    "image/AI Health Care Assistant App_Desktop - 6.png",
                    "image/AI Health Care Assistant App_Frame 745.jpeg",
                    "image/AI Health Care Assistant App_Frame 746.jpeg",
                    "image/AI Health Care Assistant App_login.png"
                ]
            },
            3: {
                title: "Food Delivery App",
                category: "Food & Drink • Mobile App",
                description: "Designed a mobile food delivery app focused on providing a smooth and easy ordering experience. Helps users quickly search for food, view menus, and place orders with a simple and clean interface.",
                overview: [
                    "Streamlined food ordering process for maximum efficiency",
                    "Created intuitive search and filter functionality",
                    "Designed clear menu display with high-quality images",
                    "Implemented real-time order tracking system",
                    "Optimized for quick and easy checkout experience"
                ],
                tools: ["Figma", "Wireframing", "Visual Design", "User Flow", "Prototyping", "Mobile Design"],
                features: [
                    { icon: "ri-search-line", title: "Smart Search", desc: "Quick food discovery with filters" },
                    { icon: "ri-restaurant-line", title: "Restaurant Menus", desc: "Detailed menus with images and prices" },
                    { icon: "ri-map-pin-line", title: "Order Tracking", desc: "Real-time delivery status updates" }
                ],
                images: [
                    "image/Food Delivery App_ home(1).png",
                    "image/Food Delivery App_ home(2).png",
                    "image/Food Delivery App_ home(3).png"
                ]
            },
            4: {
                title: "Finance App",
                category: "Finance • Mobile App",
                description: "Designed a modern finance mobile application focused on helping users manage their finances effectively. Features intuitive dashboard, expense tracking, budget management, and secure transaction capabilities.",
                overview: [
                    "Created comprehensive financial dashboard with real-time insights",
                    "Designed intuitive expense tracking and categorization system",
                    "Implemented budget planning and goal setting features",
                    "Integrated secure payment and transaction capabilities",
                    "Focused on data visualization for financial analytics"
                ],
                tools: ["Figma", "UI Design", "Data Visualization", "User Flow", "Prototyping", "Mobile Design"],
                features: [
                    { icon: "ri-line-chart-line", title: "Dashboard", desc: "Real-time financial overview and insights" },
                    { icon: "ri-wallet-3-line", title: "Expense Tracking", desc: "Categorize and monitor spending" },
                    { icon: "ri-shield-check-line", title: "Secure Transactions", desc: "Safe and encrypted payments" }
                ],
                images: [
                    "image/Finance App Finnal Look (1).png",
                    "image/Finance App Finnal Look (2).png",
                    "image/FinanceApp Finnal Look (3).png",
                    "image/Finance App Finnal Look (4).png",
                    "image/Finance App Finnal Look (5).png",
                    "image/Finance AppApp Finnal Look (6).png",
                    "image/Finance App Finnal Look (7).png",
                    "image/Finance App_Frame 743.png",
                    "image/Finance App_Frame 744.png",
                    "image/Finance App_Home_Desktop - 8.png"
                ]
            }
        };

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Fade in animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate skill bars
                    const skillBars = entry.target.querySelectorAll('.skill-bar');
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        if (width) {
                            bar.style.width = width;
                        }
                    });
                }
            });
        }, observerOptions);
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const scrollProgress = document.getElementById('scroll-progress');
            
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
            
            // Scroll progress
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + "%";
        });

        // Open Project Modal
        const modal = document.getElementById('project-modal');
        const modalClose = document.getElementById('modal-close');
        let modalThreeScene = null;
        let modalThreeAnimation = null;

        document.querySelectorAll('.open-project, .project-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.closest('.open-project') && !e.target.closest('button')) {
                    return;
                }
                
                const projectId = this.closest('.project-card').getAttribute('data-project');
                const project = projectData[projectId];
                
                if (project) {
                    // Populate modal content
                    document.getElementById('project-category').textContent = project.category;
                    document.getElementById('project-title').textContent = project.title;
                    document.getElementById('project-description').textContent = project.description;
                    
                    // Overview
                    const overviewHtml = project.overview.map(item => 
                        `<div class="flex items-start gap-3">
                            <i class="ri-checkbox-circle-fill text-purple-400 text-xl mt-1"></i>
                            <p>${item}</p>
                        </div>`
                    ).join('');
                    document.getElementById('project-overview').innerHTML = overviewHtml;
                    
                    // Tools
                    const toolsHtml = project.tools.map(tool => 
                        `<span class="bg-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">${tool}</span>`
                    ).join('');
                    document.getElementById('project-tools').innerHTML = toolsHtml;
                    
                    // Features
                    const featuresHtml = project.features.map(feature => 
                        `<div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center card-hover">
                            <i class="${feature.icon} text-4xl text-purple-400 mb-4"></i>
                            <h4 class="font-bold text-lg mb-2">${feature.title}</h4>
                            <p class="text-gray-400 text-sm">${feature.desc}</p>
                        </div>`
                    ).join('');
                    document.getElementById('project-features').innerHTML = featuresHtml;
                    
                    // Gallery
                    const galleryHtml = project.images.map((img, index) => 
                        `<div class="modal-gallery-item gallery-item" style="transition-delay: ${index * 0.1}s">
                            <img src="${img}" alt="${project.title} - Image ${index + 1}">
                        </div>`
                    ).join('');
                    document.getElementById('project-gallery').innerHTML = galleryHtml;
                    
                    // Show modal
                    modal.classList.add('active');
                    modalClose.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    
                    // Initialize 3D background for modal
                    initModalThreeJS();
                }
            });
        });

        // Close Modal
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
            modalClose.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Clean up Three.js
            if (modalThreeAnimation) {
                cancelAnimationFrame(modalThreeAnimation);
            }
            if (modalThreeScene) {
                const canvas = document.getElementById('modal-canvas');
                const gl = canvas.getContext('webgl');
                if (gl) {
                    // Dispose of Three.js resources
                }
            }
        });

        // Close modal on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                modalClose.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                modalClose.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Touch-friendly modal close with swipe down
        let touchStartY = 0;
        let touchEndY = 0;

        modal.addEventListener('touchstart', (e) => {
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        modal.addEventListener('touchend', (e) => {
            touchEndY = e.changedTouches[0].screenY;
            // Swipe down to close (threshold of 150px)
            if (touchEndY - touchStartY > 150) {
                modal.classList.remove('active');
                modalClose.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }, { passive: true });

        // Enhanced touch events for project cards
        document.querySelectorAll('.project-card').forEach(card => {
            // Add touch feedback
            card.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            }, { passive: true });

            card.addEventListener('touchend', function() {
                this.style.transform = '';
            }, { passive: true });

            card.addEventListener('touchcancel', function() {
                this.style.transform = '';
            }, { passive: true });
        });

        // Improved scroll-triggered animations with stagger effect
        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay based on element position
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });

        // Apply stagger animation to project cards
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            staggerObserver.observe(card);
        });

        // Smooth scroll with offset for fixed header on mobile
        const smoothScrollWithOffset = (target) => {
            const headerOffset = 80; // Height of fixed header
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        };

        // Enhanced navigation for mobile
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                    
                    // Smooth scroll with offset
                    smoothScrollWithOffset(target);
                }
            });
        });

        // Handle orientation change
        window.addEventListener('orientationchange', () => {
            // Resize canvas for particles
            resizeCanvas();
            
            // Close modal on orientation change for better UX
            if (modal.classList.contains('active')) {
                setTimeout(() => {
                    // Recalculate modal position
                }, 100);
            }
        });

        // Prevent body scroll when modal is open on iOS
        const preventBodyScroll = (e) => {
            if (modal.classList.contains('active')) {
                const target = e.target.closest('.modal-content');
                if (!target) {
                    e.preventDefault();
                }
            }
        };

        // Only apply on iOS Safari
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        if (isIOS) {
            document.body.addEventListener('touchmove', preventBodyScroll, { passive: false });
        }

        // Double-tap to close modal on mobile
        let lastTap = 0;
        modal.addEventListener('touchend', (e) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            if (tapLength < 500 && tapLength > 0) {
                // Double tap detected
                if (e.target === modal) {
                    modal.classList.remove('active');
                    modalClose.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            }
            lastTap = currentTime;
        }, { passive: true });

        // Particle System for Main Page
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = `rgba(102, 126, 234, ${Math.random() * 0.5 + 0.2})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((particle1, index) => {
                particles.slice(index + 1).forEach(particle2 => {
                    const dx = particle1.x - particle2.x;
                    const dy = particle1.y - particle2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(102, 126, 234, ${0.2 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particle1.x, particle1.y);
                        ctx.lineTo(particle2.x, particle2.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();

        // Modal 3D Background with Three.js
        function initModalThreeJS() {
            const modalCanvas = document.getElementById('modal-canvas');
            modalCanvas.width = window.innerWidth;
            modalCanvas.height = window.innerHeight;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas: modalCanvas, alpha: true, antialias: true });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            // Create particles
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 2000;
            const posArray = new Float32Array(particlesCount * 3);

            for (let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 15;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.02,
                color: 0x667eea,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });

            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            // Create floating geometric shapes
            const shapes = [];
            const geometries = [
                new THREE.IcosahedronGeometry(0.5, 0),
                new THREE.OctahedronGeometry(0.5, 0),
                new THREE.TetrahedronGeometry(0.5, 0)
            ];

            for (let i = 0; i < 15; i++) {
                const geometry = geometries[Math.floor(Math.random() * geometries.length)];
                const material = new THREE.MeshPhongMaterial({
                    color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
                    wireframe: true,
                    transparent: true,
                    opacity: 0.6
                });

                const shape = new THREE.Mesh(geometry, material);
                shape.position.x = (Math.random() - 0.5) * 10;
                shape.position.y = (Math.random() - 0.5) * 10;
                shape.position.z = (Math.random() - 0.5) * 10;
                shape.rotation.x = Math.random() * Math.PI;
                shape.rotation.y = Math.random() * Math.PI;

                scene.add(shape);
                shapes.push(shape);
            }

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0x667eea, 1, 100);
            pointLight.position.set(5, 5, 5);
            scene.add(pointLight);

            camera.position.z = 5;

            // Animation
            let time = 0;
            function animate() {
                modalThreeAnimation = requestAnimationFrame(animate);
                time += 0.001;

                particlesMesh.rotation.y = time * 0.1;
                particlesMesh.rotation.x = time * 0.05;

                shapes.forEach((shape, index) => {
                    shape.rotation.x += 0.01;
                    shape.rotation.y += 0.01;
                    shape.position.y += Math.sin(time + index) * 0.005;
                });

                renderer.render(scene, camera);
            }

            animate();

            // Handle resize
            window.addEventListener('resize', () => {
                modalCanvas.width = window.innerWidth;
                modalCanvas.height = window.innerHeight;
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            modalThreeScene = scene;
        }

        // Initialize skill bars on page load
        window.addEventListener('load', () => {
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                if (width) {
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 500);
                }
            });
        });
