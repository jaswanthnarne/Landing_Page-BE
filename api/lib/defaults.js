export const DEFAULT_HERO_SLIDES = [
    {
        image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584228/ethnotech/slides/vpobawwfv6otjuxfwz8g.jpg',
        heading: 'Collaborating for Educational Excellence',
        description: 'Ethnotech Academy is a cutting-edge ed-tech company providing comprehensive, industry-driven training in emerging technologies across India.',
    },
    {
        image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584229/ethnotech/slides/nn5sdsghslt4f2gqwsd7.jpg',
        heading: 'Empowering Students with Future-Ready Skills',
        description: 'From AI & Data Science to Cloud Computing — our programs are designed in partnership with 80+ institutions to build career-ready professionals.',
    },
    {
        image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584230/ethnotech/slides/epewyzv7ncvgaskswgqz.jpg',
        heading: 'Industry-Aligned Training Programs',
        description: 'Hands-on, project-based learning co-designed with sector skill councils and top corporates to bridge the gap between academia and industry.',
    },
    {
        image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584232/ethnotech/slides/sfncqmobbo9gwzbc2cw4.jpg',
        heading: 'Your Pathway to Global Certifications',
        description: 'Earn globally recognized certifications from industry leaders and validate your expertise in emerging technologies.',
    },
    {
        image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584233/ethnotech/slides/qbf1bjcuiyrbf3tvib13.jpg',
        heading: 'Driving Placement Success Across India',
        description: 'With a 95% placement rate and dedicated career support, we connect students with top-tier companies nationwide.',
    },
];

export const DEFAULT_DEPT_COURSES = [
    {
        dept: 'CSE',
        fullName: 'Computer Science & Engineering',
        color: '#004AAD',
        bg: '#EEF4FF',
        iconName: 'Cpu',
        courses: [
            'Artificial Intelligence & Machine Learning',
            'Full Stack Web Development (MERN)',
            'Cloud Computing & DevOps Eng',
            'Cybersecurity & Ethical Hacking',
            'Data Science & Predictive Analytics',
            'Blockchain Technology & Contracts',
            'Python & Advanced Programming',
            'Software Testing & QA',
        ],
    },
    {
        dept: 'ECE',
        fullName: 'Electronics & Communication Engineering',
        color: '#0D47A1',
        bg: '#E8F0FE',
        iconName: 'Radio',
        courses: [
            'Internet of Things (IoT) Systems',
            'Embedded Systems & Real-Time OS',
            'VLSI Design & Semiconductor Tech',
            'Signal Processing & Wireless Apps',
            '5G & Wireless Networks',
            'Robotics & Automated Control',
            'PCB Design & Development',
            'Drone Technology & Autopilot Coding',
        ],
    },
    {
        dept: 'EEE',
        fullName: 'Electrical & Electronics Engineering',
        color: '#1565C0',
        bg: '#E3EEFF',
        iconName: 'Zap',
        courses: [
            'PLC & SCADA Industrial Automation',
            'Electric Vehicle (EV) Engineering',
            'Power Electronics & Control Systems',
            'Smart Grid & Power Distribution',
            'Renewable Green Energy Systems',
            'Industrial Electrical Engineering',
            'Energy Audit & Management Systems',
            'Solar Power Systems Design',
        ],
    },
    {
        dept: 'MECH',
        fullName: 'Mechanical Engineering',
        color: '#1976D2',
        bg: '#E1ECFA',
        iconName: 'Settings',
        courses: [
            'CAD/CAM Design & CNC Machining',
            '3D Printing & Additive Manufacturing',
            'Industry 4.0 & Smart Factories',
            'Robotics, Actuators & Mechatronics',
            'Product Prototyping & SolidWorks',
            'Quality Control & Six Sigma Processes',
            'AutoCAD & Autodesk Inventor Computations',
            'Hydraulics & Pneumatics Systems (Festo)',
        ],
    },
    {
        dept: 'CIVIL',
        fullName: 'Civil Engineering',
        color: '#0288D1',
        bg: '#E0F3FC',
        iconName: 'Building2',
        courses: [
            'AutoCAD & Revit Building Information Modeling',
            'Structural Analysis & Design Software',
            'GIS & Remote Sensing Applications',
            'Modern Construction Management',
            'STAAD Pro & ETABS Computations',
            'Urban Planning & Eco Infrastructure',
            'Environmental Engineering & Hydrology',
            'Project Management (PMP Frameworks)',
        ],
    },
    {
        dept: 'BCA / BSc',
        fullName: 'BCA, B.Sc Computer Science / IT',
        color: '#0277BD',
        bg: '#E0F2FD',
        iconName: 'Monitor',
        courses: [
            'Python Application Development',
            'Mobile App Coding (iOS & Android)',
            'Database Management Systems (SQL & NoSQL)',
            'Cybersecurity Fundamentals & Auditing',
            'UI/UX Design & User Experience Research',
            'Interactive Game Development (Unity)',
            'Web Development (React & Node.js stacks)',
            'Business Intelligence & Data Analytics',
        ],
    },
    {
        dept: 'MBA / BBA',
        fullName: 'Management & Business Studies',
        color: '#01579B',
        bg: '#E0EEF9',
        iconName: 'Briefcase',
        courses: [
            'Digital Marketing & Growth Hacking',
            'Business Analytics & BI Solutions',
            'E-Commerce Management',
            'FinTech & Banking Technology Systems',
            'HR Technology & People Analytics',
            'Supply Chain & Logistics Tech',
            'Entrepreneurship & Innovation Labs',
            'CRM & Salesforce Fundamentals',
        ],
    },
    {
        dept: 'ARTS',
        fullName: 'Arts, Humanities & Social Science',
        color: '#006064',
        bg: '#E0F5F5',
        iconName: 'Palette',
        courses: [
            'Graphic Design & Branding',
            'Video Production & Creative Editing',
            'Content Writing & SEO Marketing',
            'Social Media Management',
            'Photography & Multimedia Productions',
            'Communication Skills & Soft Skills',
            'Animation & Motion Graphics (Adobe)',
            'Digital Journalism & Social Reporting',
        ],
    },
];

export const DEFAULT_COE_LABS = [
    {
        id: 'apple', partner: 'Apple', name: 'Apple Centre of Excellence',
        desc: 'A state-of-the-art computing lab with 30+ iMac systems for iOS app development, creative media, and digital publishing.',
        color: '#1d1d1f', tag: 'Creative & iOS Dev Computing', image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584234/ethnotech/coe/qd89a0ea0ki3x2agagsi.jpg'
    },
    {
        id: 'ibm', partner: 'IBM', name: 'IBM Centre of Excellence',
        desc: 'Enterprise-grade cloud computing and AI environment tailored for predictive analytics, database systems, and full-stack enterprise builds.',
        color: '#1F70C1', tag: 'Enterprise AI & Cloud Systems', image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584235/ethnotech/coe/f2nby1qy1qfhpaymmmhz.jpg'
    },
    {
        id: 'intel', partner: 'Intel', name: 'Intel Centre of Excellence',
        desc: 'High-performance computing workstations specifically calibrated for training massive artificial intelligence and deep learning models.',
        color: '#0068B5', tag: 'High-Perf AI & Parallel Compute', image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584237/ethnotech/coe/oaawcqdvmmkkia2ycm9h.jpg'
    },
    {
        id: 'arvr', partner: 'AR / VR', name: 'AR / VR Innovation Lab',
        desc: 'Fully equipped extended reality studio with professional VR headsets, green screen, and immersive content production setup.',
        color: '#6D28D9', tag: 'Immersive Technology & 3D Dev', image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584238/ethnotech/coe/k4gcz6xu4jloahmr16ts.jpg'
    },
    {
        id: 'schneider', partner: 'Schneider Electric', name: 'Schneider Electric CoE',
        desc: 'Industrial automation training lab featuring Schneider PLC training stations, SCADA dashboards, and variable frequency drives.',
        color: '#3DCD58', tag: 'Industrial Automation & PLC', image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584239/ethnotech/coe/vta1dmy3p5er5lic0crr.jpg'
    },
    {
        id: 'festo', partner: 'Festo', name: 'Festo Fluid Power CoE',
        desc: 'Dedicated fluid power training lab equipped with Festo industrial panels for pneumatics, hydraulics, and mechatronic systems.',
        color: '#E8A000', tag: 'Fluid Power Control & Robotics', image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584240/ethnotech/coe/zjpyiu6dye8fzd1uukhf.jpg'
    }
];

export const DEFAULT_PLACEMENT_PARTNERS = [
    { name: "Adobe", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584241/ethnotech/partners/smzcrqbppjyy57zunrhb.jpg" },
    { name: "Microsoft", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584242/ethnotech/partners/zgnxwoobtvhbxp0dzr0e.svg" },
    { name: "NVIDIA", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584245/ethnotech/partners/y3a0a3bactwfmikzjerj.png" },
    { name: "AWS", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584246/ethnotech/partners/kyihiccexi3gg0iis6gg.jpg" },
    { name: "Intel", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584247/ethnotech/partners/lmsmyvesmz6wun3caiom.png" },
    { name: "Meta", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584248/ethnotech/partners/boueksrody2ie17tbhnl.svg" },
    { name: "IBM", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584250/ethnotech/partners/aifakz3geaw9saw29edv.jpg" },
    { name: "Schneider Electric", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584251/ethnotech/partners/qoarxgsdvni4keel6jij.svg" },
    { name: "ABB", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584254/ethnotech/partners/bmtgr5oak9r1pavqycaw.svg" },
    { name: "MathWorks", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584257/ethnotech/partners/nfibfsqeypnhewqgatno.jpg" },
    { name: "Autodesk", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584258/ethnotech/partners/olepxeyzmcscza8mxysn.png" },
    { name: "Unity", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584259/ethnotech/partners/ezeyvybq71ghkvfq9n4l.png" }
];

export const DEFAULT_EDUCATIONAL_PARTNERS = [
    { name: "Sri Manakula Vinayagar", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584260/ethnotech/colleges/mqwdwzw02tfi2e1xn5ye.png" },
    { name: "Chandigarh University", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584261/ethnotech/colleges/n5n7hrsqdgd7boe1kmd1.png" },
    { name: "Sister Nivedita University", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584262/ethnotech/colleges/x67wzshtn0titi108wrk.png" },
    { name: "KIIT University", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584264/ethnotech/colleges/ywn48b9lbsxy3andyl2z.png" },
    { name: "Parul University", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584265/ethnotech/colleges/wtpdty1z1x0lvvu13u4t.png" },
    { name: "DY Patil Group", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584266/ethnotech/colleges/tmhdy8luvwd0ctnfrpjy.png" },
    { name: "Symbiosis", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584267/ethnotech/colleges/r8aosqnpg9zu1vmhndkl.png" },
    { name: "Sona College of Technology", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584268/ethnotech/colleges/d6umblat5m9aybyhgsag.png" },
    { name: "SJB Institute of Technology", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584270/ethnotech/colleges/vtjnmxeqmdd6jsv5hldr.png" },
    { name: "East West Institute", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584271/ethnotech/colleges/ddtgdssu38bpfl37ga3k.png" },
    { name: "Srinivas Institute", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584272/ethnotech/colleges/luvwaiyay6cdt5viilay.png" },
    { name: "Maharaja Institute", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584273/ethnotech/colleges/njsfyw7i5k9nhmkqi4yn.png" },
    { name: "PDA College", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584274/ethnotech/colleges/gifhz5dznyrthjc7yuft.png" },
    { name: "LTSU Punjab", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584276/ethnotech/colleges/xvqzlr7z0obwzlm7n1xb.png" },
    { name: "Takshashila University", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584277/ethnotech/colleges/gfcalzfuj8jzx1co57m9.png" },
    { name: "Karnataka State Open Univ", logo: "https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584278/ethnotech/colleges/fvxn889dn7mdrg4uosld.png" },
];

export const DEFAULT_JOB_OPENINGS = [
    {
        id: '1',
        title: 'Technical Trainer - Full Stack Web Development (MERN)',
        department: 'Academics & Skilling',
        location: 'Bengaluru (On-site)',
        type: 'Full-time',
        experience: '2-5 years',
        description: 'Lead training sessions on React, Node.js, Express, and MongoDB. Help college students build Capstone projects and review code submissions.',
        requirements: 'Proficient in JavaScript/ES6+, React, Node.js, MongoDB. Excellent communication and mentoring skills. Prior training experience is a plus.',
    },
    {
        id: '2',
        title: 'IoT & Embedded Systems Instructor',
        department: 'Academics & Skilling',
        location: 'Pune (Hybrid)',
        type: 'Full-time',
        experience: '3+ years',
        description: 'Conduct training in microcontroller programming, sensors interfaces, RTOS, and Cloud IoT protocols. Manage laboratories setup and equipment training.',
        requirements: 'Strong core C/C++ skills. Experience with Arduino, Raspberry Pi, ESP32, and ARM. Familiarity with AWS IoT or Azure IoT.',
    },
    {
        id: '3',
        title: 'Corporate Placement Coordinator',
        department: 'Corporate Relations',
        location: 'Bengaluru (On-site)',
        type: 'Full-time',
        experience: '1-3 years',
        description: 'Coordinate with MNCs and corporate recruiters to schedule drives, collect resumes, prepare students for interviews, and track placement metrics.',
        requirements: 'Strong networking and negotiation abilities. Good presentation skills. MBA or equivalent preferred.',
    }
];

export const DEFAULT_PAGE_IMAGES = {
    'about-1': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584280/ethnotech/events/gbykpa55bol73huip6tg.png',
    'about-2': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584281/ethnotech/events/z5lz6qp5zr1hj1ursicz.png',
    'about-3': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584282/ethnotech/events/mimxjdsyvs2xcfasiusi.png',
    'about-4': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584284/ethnotech/events/rnjvafcqdu2lnhtz4bcr.png',
    'about-5': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584285/ethnotech/events/jwatkuxmyro4anint1wu.png',
    
    'careers-1': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584233/ethnotech/slides/qbf1bjcuiyrbf3tvib13.jpg',
    'careers-2': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584286/ethnotech/page_images/eg3xvtp8ihm1jhv7c7ob.jpg',
    'careers-3': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584288/ethnotech/page_images/mci7gbrhg26rlunle7zx.jpg',
    'careers-4': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584289/ethnotech/page_images/xwoasj7to7xuq88359je.jpg',
    
    'programmes-1': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584290/ethnotech/page_images/x8sn7shwo7rk7inbuxm3.jpg',
    'programmes-2': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584229/ethnotech/slides/nn5sdsghslt4f2gqwsd7.jpg',
    'programmes-3': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584291/ethnotech/page_images/t6cs1oxexauj3x1imp4i.jpg',
    'programmes-4': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584292/ethnotech/page_images/eyfrannjprdhyfl9p7t2.jpg',
    
    'coe-1': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584293/ethnotech/page_images/dfivijh6zw9zu44lm4er.jpg',
    'coe-2': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584294/ethnotech/page_images/hxbwq7wsmlcxsanhgork.jpg',
    'coe-3': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584296/ethnotech/page_images/sgwtst9dx9xmnu0xeme4.jpg',
    'coe-4': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584297/ethnotech/page_images/h1wymxwvdkmrehzqttlm.jpg',
    
    'placements-1': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584298/ethnotech/page_images/df7unctnu92wtk0xm1ea.jpg',
    'placements-2': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584299/ethnotech/page_images/bkbt0d2fcfjc9xuhkd7k.jpg',
    'placements-3': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584228/ethnotech/slides/vpobawwfv6otjuxfwz8g.jpg',
    'placements-4': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584300/ethnotech/page_images/nphkyki1nsjao50txjfq.jpg',
    
    'internships-1': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584302/ethnotech/page_images/bhl7yljuatq62etnzqhj.jpg',
    'internships-2': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584230/ethnotech/slides/epewyzv7ncvgaskswgqz.jpg',
    'internships-3': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584303/ethnotech/page_images/fnmrn8xj4ts4jb5ghggy.jpg',
    'internships-4': 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781584232/ethnotech/slides/sfncqmobbo9gwzbc2cw4.jpg'
};
