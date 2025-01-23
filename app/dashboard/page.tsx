import Navbar from "../components/navbar";

const Dashboard = () => {
    const user = {
        name: "John Doe",
        skills: [
            { name: "HTML", progress: 100 },
            { name: "CSS", progress: 85 },
            { name: "JavaScript", progress: 75 },
            { name: "TypeScript", progress: 60 },
            { name: "React", progress: 40 },
            { name: "Node.js", progress: 25 },
        ],
        academicFormation: "Técnico em Informática para internet",
        profileCompletion: {
            current: 75, // Porcentagem concluída
            missing: ["DevOps", "UX Design"], // Habilidades faltantes
        },
        recentActivity: {
            lastCourse: "Introdução a React",
            recentSkill: "TypeScript",
            oldSkill: "JavaScript",
        },
        jobList: [
            {
                title: "Desenvolvedor Front-End",
                company: "TechCorp",
                location: "São Paulo, SP",
            },
            {
                title: "Analista de Sistemas",
                company: "CodeFactory",
                location: "Recife, PE",
            },
        ],
    };

    return (
        <>
            <Navbar />
            {/* Bem vindo */}
            <header className="py-8 text-center">
                <h2 className="text-3xl font-bold">Bem vindo, {user.name}!</h2>
                <p className="text-gray-400">
                    Explore seu progresso e mantentenha-se atualizado
                </p>
            </header>
        </>
    );
};

export default Dashboard;
