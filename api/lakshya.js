import { runCors } from './lib/cors.js';
import { connectToDatabase } from './lib/db.js';

const DEFAULT_LAKSHYA_CONFIG = {
    pm_quote: "Amrit Kaal represents a unique 25-year window of opportunity (2022-2047) where the skill, dedication, and innovation of our youth will drive India's transition into a developed nation (Viksit Bharat). Empowering our students with future-ready skills is the ultimate key to global technological leadership.",
    pm_author: "Shri Narendra Modi, Prime Minister of India",
    pm_desc: "In alignment with this prime ministerial roadmap, Lakshya 2047 was built to prepare skilled youth in emerging technological areas (Robotics, Cloud, Drone tech, IoT, Chip design) during the Amrit Kaal window.",
    quotes: [
        {
            quote: "The launch of the first Centre for Future Skills in Gujarat is an important step as we move towards building a Viksit Bharat. With this, the model is now active across 11 institutions and have already trained over 50,000+ candidates.",
            author: "Mr. Nitin Kapoor",
            title: "Vice President, National Skill Development Corporation (NSDC)"
        },
        {
            quote: "CFS has been very effective in bringing elite global certification programs to the doorstep of colleges at the most affordable cost. We are committed to bridging the gap between academics and industry by creating globally skilled, innovation-driven professionals.",
            author: "Dr. Kiran Rajanna",
            title: "CEO, Ethnotech Academy"
        },
        {
            quote: "Lakshya 2047 is not only contemporary but also very futuristic. The age of isolation is over, and you cannot leave everything to the government... we are open to the private sector because we realise that if we have to move on, we cannot move in isolation.",
            author: "Dr. Jitendra Singh",
            title: "Union Minister of State (I/C), Science & Technology and Earth Sciences"
        },
        {
            quote: "It is another step in creating a future-ready ecosystem, which combines innovations and ethics.",
            author: "Dr. Devanshu Patel",
            title: "President, Parul University"
        }
    ],
    labs: [
        { id: 'nvidia', partner: 'NSDC & Ethnotech', name: 'Aero Vision Drone Lab', tag: 'Drone Technology & Flight Dynamics', desc: 'Advanced training setup for quadcopter design, flight controllers, autonomous pathing, and agricultural spraying drone technologies.', image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781586068/ethnotech/lakshya_images/okvtxirv0qjmzvxlt2ql.jpg' },
        { id: 'apple', partner: 'Apple', name: 'Apple iOS Developer Academy', tag: 'Swift Ecosystem & iOS Architectures', desc: 'Equipped with state-of-the-art blue iMac stations and macOS development environments for hands-on iOS app prototyping and Swift coding.', image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781586053/ethnotech/lakshya_images/uxddcyffyu4qqk6j9sb3.jpg' },
        { id: 'abb', partner: 'ABB', name: 'ABB Industrial Automation Lab', tag: 'Industry 4.0 & Robotic Arms', desc: 'Features an IRB 1090 Education robotic arm inside a protective glass cage, enabling student scripting of automated pick-and-place lines.', image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781586051/ethnotech/lakshya_images/r1ll3go6bw49ho7qdq7y.jpg' },
        { id: 'cisco', partner: 'NSDC & Ethnotech', name: 'Major Machine Zone (Idea Lab)', tag: 'Precision Fabrication & Laser Engraving', desc: 'Equipped with high-performance SIL laser engraving and cutting machinery for rapid wood, acrylic, and plastic sheet prototyping.', image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781586057/ethnotech/lakshya_images/w4c41wyyez8ow8t2rmrq.jpg' },
        { id: 'arvr', partner: 'NSDC & Ethnotech', name: 'Microsoft Lab', tag: 'Enterprise Software & Cloud Development', desc: 'Spacious training hall with dedicated computing setups and an interactive smart board focused on cloud infrastructure, DevOps, and communication.', image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781586063/ethnotech/lakshya_images/jhwcnp7xmqbcmz6f3mw1.jpg' },
        { id: 'sensor', partner: 'NSDC & Ethnotech', name: 'AR / VR Spatial Computing Studio', tag: 'Immersive Production & Green Screen', desc: 'Equipped with green screen backdrop walls, cameras, professional softbox lighting, VR headsets, and an interactive driving simulator cockpit.', image: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781586064/ethnotech/lakshya_images/g54tjr9wimtj9jjgme1u.jpg' }
    ],
    gallery: [
        { type: 'image', src: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781576841/ethnotech/lakshya/kdqpithnzk8vj0ap1kve.jpg', caption: 'Medical Auditorium Launch', sub: 'Medical auditorium packed with Parul University students and guests during the inaugural address.' },
        { type: 'image', src: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781576844/ethnotech/lakshya/xgg4leycisaiokal6pds.jpg', caption: 'Agricultural Drone Close-up', sub: 'A heavy-duty hexacopter drone equipped with spraying attachments for precision farming studies.' },
        { type: 'image', src: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781576847/ethnotech/lakshya/osdybbj2y5lou80c77zv.jpg', caption: 'Memento Presentation', sub: 'Union Minister Dr. Jitendra Singh receiving a memento celebrating the establishment of the CFS.' },
        { type: 'image', src: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781576831/ethnotech/lakshya/xcvwthyxjtwvpob2s2ft.jpg', caption: 'IRB 1090 Education Arm', sub: 'Industrial-grade ABB robotic manipulator training rig inside the glass enclosure.' },
        { type: 'image', src: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781576816/ethnotech/lakshya/dqlyzecehrgg9i9mj8e5.jpg', caption: 'VIP Gallery Walkthrough', sub: 'Union Minister Dr. Jitendra Singh and university directors reviewing student-made software on large displays.' },
        { type: 'image', src: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781576819/ethnotech/lakshya/nf7q6ukfygtdqwb8epk6.jpg', caption: 'Academic Review Walkthrough', sub: 'University coordinators and coordinators touring the state-of-the-art facilities.' },
        { type: 'image', src: 'https://res.cloudinary.com/ddwxonjbd/image/upload/v1781576851/ethnotech/lakshya/spovyte62fvcesvqrvja.jpg', caption: 'Inaugural Speech by Dr. Jitendra Singh', sub: 'Union Minister of State delivering a speech on youth empowerment in Amrit Kaal.' },
        { type: 'video', src: 'https://res.cloudinary.com/ddwxonjbd/video/upload/v1781584334/ethnotech/lakshya_videos/d46f4b09ftrbygatdgcy.mp4', caption: 'Robotic Exoscope Neurosurgery Demo', sub: 'Dr. Iype Cherian demonstrating cranial channel operations' },
        { type: 'video', src: 'https://res.cloudinary.com/ddwxonjbd/video/upload/v1781584336/ethnotech/lakshya_videos/p1zbqupcurzhbqg9f4m4.mp4', caption: 'Inaugural Walkthrough Loop', sub: 'Minister arriving at Lakshya 2047 CFS' },
        { type: 'video', src: 'https://res.cloudinary.com/ddwxonjbd/video/upload/v1781584337/ethnotech/lakshya_videos/zvwerpwdtp0820iwfayt.mp4', caption: 'PIERC Innovation & Incubation Showcase', sub: '250+ active startups generating Rs. 40 Cr revenue' },
        { type: 'video', src: 'https://res.cloudinary.com/ddwxonjbd/video/upload/v1781584339/ethnotech/lakshya_videos/znmrhf2xspcxubrfidpc.mp4', caption: 'Pragya Advanced Simulation Centre', sub: 'एमबीबीएस simulation infrastructure' },
        { type: 'video', src: 'https://res.cloudinary.com/ddwxonjbd/video/upload/v1781584340/ethnotech/lakshya_videos/lphbvgqfoljbv8ugwmvu.mp4', caption: 'Apple Swift Mobile App Lab', sub: 'Interactive dry-eye software development overview' },
        { type: 'video', src: 'https://res.cloudinary.com/ddwxonjbd/video/upload/v1781584342/ethnotech/lakshya_videos/rhmptxp5nqlgerquytx3.mp4', caption: 'VR Device Spatial Computing Session', sub: 'Meta Quest headgear training in AR/VR Lab' },
        { type: 'video', src: 'https://res.cloudinary.com/ddwxonjbd/video/upload/v1781584343/ethnotech/lakshya_videos/xdket0nfyejnrt5mvifi.mp4', caption: 'ABB Robotics Interface Demo', sub: 'Configuring mechanical manipulators and automated lines' }
    ],
    ecosystem_labs: [
        { id: 'apple', partner: 'Apple', name: 'Apple Lab', desc: 'The Apple Lab at Parul University trains students across the iOS application development lifecycle: Swift programming, SwiftUI for UI development, backend logic, App Store submission, and UI/UX design. The lab also supports development for watchOS, tvOS, macOS, and visionOS. The B.Tech track that feeds this lab is the B.Tech in Computer Science Engineering. During the inauguration, a Computer Science student presented an iOS application recognised among Apple\'s top 350 apps in India.' },
        { id: 'arvr', partner: 'AR / VR', name: 'AR/VR Lab', desc: 'The AR/VR Lab is fitted with Apple Vision Pro and Meta Quest headsets supporting direct hand and finger tracking. Application domains taught span surgical training, architectural visualisation, flight simulation, industrial maintenance, and product prototyping. Dr Jitendra Singh donned a Vision Pro headset and explored a photorealistic 3D rendering of a car during the inauguration walkthrough.' },
        { id: 'abb', partner: 'ABB', name: 'ABB Industrial Automation Lab', desc: 'The lab is fitted with operational ABB robotic systems, including an articulated robotic arm capable of fluid path-traced motion and adaptive task replication. The B.Tech in Robotics and Automation and B.Tech in Mechatronics feed students into this lab. Curriculum covers robot programming, path planning, end-effector selection, vision system integration, and multi-robot cell design.' },
        { id: 'nvidia', partner: 'NVIDIA', name: 'NVIDIA Lab', desc: 'The NVIDIA Lab houses GPU-accelerated workstations for artificial intelligence and graphics processing unit computation. Students train neural networks, work on computer vision and natural language processing models, and experiment with reinforcement learning and generative AI architectures. The aligned programme is the B.Tech in Artificial Intelligence and Machine Learning.' },
        { id: 'cisco', partner: 'Cisco', name: 'Cisco Lab', desc: 'The Cisco Lab covers networking and cybersecurity. Students configure routing and switching hardware, implement firewalls, intrusion detection, and VPN configurations. CCNA and CCNP certification preparation runs through this lab. Relevant to India\'s expanding cybersecurity industry and the global shortage of certified network engineers.' },
        { id: 'aws', partner: 'AWS', name: 'AWS Lab', desc: 'The AWS Lab covers compute, storage, databases, networking, security, machine learning, and DevOps services on Amazon Web Services. Students build and deploy cloud applications, architect for scalability, and develop infrastructure-as-code skills. AWS certification preparation is integrated.' },
        { id: 'vlsi', partner: 'VLSI', name: 'VLSI Lab', desc: 'The VLSI Lab teaches integrated circuit design using electronic design automation tools, IC layout, simulation, semiconductor device physics, and fabrication-process understanding. Aligned with the India Semiconductor Mission. The B.Tech track is the B.Tech in Electronics with VLSI Design specialisation.' },
        { id: 'ansys', partner: 'ANSYS', name: 'ANSYS Lab', desc: 'The ANSYS Lab at Parul University delivers training in engineering simulation, finite element analysis (FEA), computational fluid dynamics (CFD), and multiphysics modelling using the ANSYS suite. Career relevance covers automotive, aerospace, oil and gas, manufacturing, and electronics product development. The lab adds depth to the engineering programmes by teaching the simulation tooling that industry uses for design validation before physical prototyping.' },
        { id: 'adobe', partner: 'Adobe', name: 'Adobe Lab', desc: 'The Adobe Lab at Parul University focuses on creative design, digital media production, and visual communication using the Adobe Creative Cloud suite including Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, and XD. The lab serves students across Design, Architecture, Fine Arts, Mass Communication, and any engineering or computer science student building product interfaces. UI/UX design and digital media skills are increasingly central to product engineering careers.' },
        { id: 'autodesk', partner: 'Autodesk', name: 'Autodesk Lab', desc: 'The Autodesk Lab is the digital design studio of Lakshya 2047, running AutoCAD, Fusion 360, Revit, and Inventor at professional standard. The curriculum runs the complete design workflow from engineering drawings to parametric 3D models, technical documentation, and CAM preparation.' }
    ]
};

export default async function handler(req, res) {
    if (runCors(req, res)) return;
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection('lakshya_config');

        // Check if config exists, if not, seed it
        const doc = await collection.findOne({ _id: 'config_singleton' });
        if (!doc) {
            await collection.insertOne({ _id: 'config_singleton', ...DEFAULT_LAKSHYA_CONFIG });
        }

        switch (req.method) {
            case 'GET': {
                const currentConfig = await collection.findOne({ _id: 'config_singleton' });
                return res.status(200).json(currentConfig);
            }
            case 'PUT': {
                const updatedConfig = req.body;
                delete updatedConfig._id; // Prevent modifying immutable _id
                await collection.updateOne(
                    { _id: 'config_singleton' },
                    { $set: updatedConfig },
                    { upsert: true }
                );
                return res.status(200).json({ success: true });
            }
            default:
                res.setHeader('Allow', ['GET', 'PUT']);
                return res.status(405).json({ error: `Method ${req.method} not allowed` });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Database error occurred' });
    }
}
