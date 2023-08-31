const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
];

function listSkillsAndProjects(array) {
    const developersWithJsSkill = [];
    const projects = [];

    for (let developer of array) {
        if (developer.habilidades.includes('JavaScript')) {
            // Agregar el desarrollador al listado
            developersWithJsSkill.push(developer);
        }
         // Agregar los nombres de los proyectos al listado de proyectos
        for (let project of developer.proyectos) {
            projects.push(project.nombre);
        }
    }

    console.log('Desarrolladores con habilidad JavaScript: ', developersWithJsSkill);
    console.log('Listado de proyectos: ', projects);
}

listSkillsAndProjects(datos);
