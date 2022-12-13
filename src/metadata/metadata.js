module.exports = {
  name: 'Ksenia Portu',
  title: 'Software engineer, Mathematician, Haskell/Nix admirer ',
  facts: {
    'Linkedin': `<a href="https://www.linkedin.com/in/ksenia-pozdnyakova"><i class="fa-brands fa-linkedin fact-icon"></i>Ksenia Portu</a>`,
    'Github': `<a href="https://github.com/ksenia-portu"><i class="fa-brands fa-github fact-icon"></i>Ksenia Portu</a>`,    
    'Email': '<a href="mailto:ksenia.portu@gmail.com"><i class="fa fa-envelope fact-icon"></i>ksenia.portu@gmail.com</a>'
  },
  skills: [
    ['Mathematics', 100],    
    ['Haskell', 100],
    ['Functional programming', 100],    
    ['Teaching', 100],      
    ['NixOS', 20],
    ['Linux', 100],    
    ['Blockchain', 70],
    ['Pi calculus', 80],
    ['Petri nets', 80],    
    ['Linear Logic', 80], 
    ['Session types', 50],  
    ['Git', 100],
    ['Cryptography', 20],    
    ['Devops', 20],  
    ['Research and Software Development', 50],  
    ['Category theory', 30],      
    ['Dependent types', 10],      
    ['Recursion-schemes', 10],        
    ['Linear algebra', 50],      
    ['Statistics', 50],     
    ['Machine learning', 50],        
    ['Comonads', 50],            
    ['SQL', 100],    
    ['Python', 100],                       
  ], 
  positions: [   
    {
      title: 'Haskell Software Engineer',
      project: 'payment system',
      period: '',
      skills: ['Haskell', 'PostgreSQL'],
      devops_skills: ['docker', 'docker-compose', 'nix', 'knative']       
    },
    {
      title: 'Haskell Software Engineer',
      project: 'recruitement web platform',
      period: '',      
      skills: ['Haskell', 'PostgreSQL'],
      devops_skills: ['docker', 'docker-compose']
    },
    {
      title: 'Haskell Software Engineer',
      project: 'develop DSL',
      period: '',      
      skills: ['Haskell', 'Nix package manager', 'compiler', 'lambda calculus', 'Parsing', 'Type inference', 'Bidirectional typechecker', 'Evaluation'],
    },    
    {
      title: 'Blockchain Haskell developer',
      project: 'new generation blockchain',
      period: 'Oct 2017 - Jan 2019 · 1 yr 4 mos',     
      skills: ['Haskell', 'cryptography', 'blockchain consensus algorithms', 'p2p network', 'routing', 'smart-contracts', 'RocksDB'],
      devops_skills: ['rancher', 'docker'],
      about_the_project: `
      I have worked as Blockchain Haskell developer on new blockchain generation project.
      The framework part of the project is open-sourced ​https://github.com/Enecuum/Node
      and it has decent documentation and explanations about architecture and possibilities:
      Building network actors with Enecuum Node Framework
      Why Haskell?
      Enecuum. Framework possibilities
      Enecuum.Framework Possibilities, Part 2      
      `,
      about_used_stack: `
      Stack and knowledge
      *haskell:*
      Free monads (eDSLs)
        STM (Software Transactional Memory)
        Lenses
        Key Value database - RocksDB
        
      *common:*
      - DevOps: rancher, docker
      - Metrics: Grafana+Graphite+StatsD
      - Project tracking: Redmine
      - Knowledge database: Confluence      
      `,
      about_tasks: `
      research and development in such fields as
      - ​blockchain related:
        -- blockchain consensus algorithms (PoW,
      PoS, PoA)
        -- p2p network, routing
        -- tests (integrational, functional)
        -- smart-contracts, petri-nets, pi-calculus
      
      - common application dev related:
        -- config management
        -- cli
        -- loggingPackages, dependency management via stack.
        -- parallel computations and processes      
      `    
    },        
  ],
  experience: [
    {
      header: 'University Lecturer',
      company: 'Branch of Ural Federal University',
      skills: ['teaching'],
      period: 'Sem 2020 - Jun 2021 - full university year(two semesters)',
      contents: `
      I taught such disciplines as
      - Information System's design
      - High-level programming languages (Haskell)
      - Databases
      - Semantic networks

      I curated numerous students' programming projects.
`
    }    
  ]
};






