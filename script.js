// Site data extracted from PDFs (sorted alphabetically)
const sitesData = [
    'https://beecrowd.com/community/',
    'bytes.com',
    'codeproject.com',
    'codeguru.com',
    'codementor.io/community',
    'coderwall.com',
    'community.spiceworks.com',
    'daniweb.com',
    'dev.to',
    'developers.google.com/community',
    'devhubby.com',
    'digitalocean.com/community',
    'discuss.codecademy.com',
    'docs.microsoft.com/answers',
    'dzone.com',
    'experts-exchange.com',
    'findnerd.com',
    'forum.freecodecamp.org',
    'geekinterview.com',
    'geeksforgeeks.org',
    'github.community',
    'github.com/discussions (within specific repositories)',
    'hashnode.com',
    'https://langdev.stackexchange.com/',
    'https://sqa.stackexchange.com/',
    'leetcode.com',
    'lobste.rs',
    'meta.stackexchange.com',
    'news.ycombinator.com',
    'producthunt.com',
    'quora.com',
    'reddit.com/r/coding',
    'reddit.com/r/cscareerquestions',
    'reddit.com/r/programming',
    'showwcase.com',
    'sitepoint.com/community',
    'softwaredev.forumotion.com',
    'softwareengineering.stackexchange.com',
    'stackoverflow.com',
    'techrepublic.com/forums',
    'webdeveloper.com'
];

// Site descriptions with purpose, content and target audience
const siteDescriptions = {
    'https://beecrowd.com/community/': {
        name: 'beeCrowd Community',
        purpose: 'Online programming contest platform and community',
        content: 'Programming challenges, contests, educational content, and community discussions focused on competitive programming',
        targetAudience: 'Students, competitive programmers, software developers looking to improve algorithmic skills',
        url: 'https://beecrowd.com/community/'
    },
    'bytes.com': {
        name: 'Bytes.com',
        purpose: 'Developer community forum for programming discussions',
        content: 'Technical forums, code examples, programming tutorials, and peer-to-peer help across multiple programming languages',
        targetAudience: 'Software developers, programmers, students learning to code',
        url: 'https://bytes.com'
    },
    'codeproject.com': {
        name: 'CodeProject',
        purpose: 'Programming articles and code sharing platform',
        content: 'Technical articles, code samples, tutorials, tips and tricks, software development resources',
        targetAudience: 'Professional developers, software engineers, programming enthusiasts',
        url: 'https://codeproject.com'
    },
    'codeguru.com': {
        name: 'CodeGuru',
        purpose: 'Programming tutorials and development resources',
        content: 'Programming tutorials, code libraries, developer forums, technical articles focused on Microsoft technologies',
        targetAudience: 'Windows developers, .NET programmers, Visual Studio users',
        url: 'https://codeguru.com'
    },
    'codementor.io/community': {
        name: 'Codementor Community',
        purpose: 'Mentorship and learning platform for developers',
        content: 'Coding tutorials, mentorship sessions, community discussions, career advice for developers',
        targetAudience: 'Beginner to intermediate developers, career changers, coding bootcamp students',
        url: 'https://codementor.io/community'
    },
    'coderwall.com': {
        name: 'Coderwall',
        purpose: 'Professional network for developers',
        content: 'Developer profiles, coding tips (protips), achievement system, professional networking',
        targetAudience: 'Professional software developers, freelancers, tech entrepreneurs',
        url: 'https://coderwall.com'
    },
    'community.spiceworks.com': {
        name: 'Spiceworks Community',
        purpose: 'IT professional community and support platform',
        content: 'IT discussions, troubleshooting guides, product reviews, network management resources',
        targetAudience: 'IT professionals, system administrators, network engineers',
        url: 'https://community.spiceworks.com'
    },
    'daniweb.com': {
        name: 'DaniWeb',
        purpose: 'Programming and technology community forum',
        content: 'Programming forums, web development discussions, hardware and software troubleshooting',
        targetAudience: 'Developers, students, IT professionals, technology enthusiasts',
        url: 'https://daniweb.com'
    },
    'dev.to': {
        name: 'DEV Community',
        purpose: 'Social platform for software developers',
        content: 'Developer blogs, coding tutorials, career advice, open source discussions, community challenges',
        targetAudience: 'Software developers of all levels, tech writers, open source contributors',
        url: 'https://dev.to'
    },
    'developers.google.com/community': {
        name: 'Google Developers Community',
        purpose: 'Official Google platform for developers',
        content: 'Google technology documentation, developer events, community programs, technical resources',
        targetAudience: 'Developers using Google technologies, mobile app developers, web developers',
        url: 'https://developers.google.com/community'
    },
    'devhubby.com': {
        name: 'DevHubby',
        purpose: 'Programming tutorials and code examples',
        content: 'Step-by-step coding tutorials, programming examples, technical how-to guides',
        targetAudience: 'Beginner programmers, students, self-taught developers',
        url: 'https://devhubby.com'
    },
    'digitalocean.com/community': {
        name: 'DigitalOcean Community',
        purpose: 'Developer tutorials and cloud computing resources',
        content: 'Technical tutorials, server administration guides, cloud deployment instructions, Q&A forums',
        targetAudience: 'DevOps engineers, system administrators, full-stack developers',
        url: 'https://digitalocean.com/community'
    },
    'discuss.codecademy.com': {
        name: 'Codecademy Forums',
        purpose: 'Learning support community for Codecademy students',
        content: 'Course discussions, coding help, project feedback, peer learning support',
        targetAudience: 'Codecademy students, coding bootcamp participants, beginners learning to code',
        url: 'https://discuss.codecademy.com'
    },
    'docs.microsoft.com/answers': {
        name: 'Microsoft Q&A',
        purpose: 'Official Microsoft technical support community',
        content: 'Microsoft technology Q&A, documentation, troubleshooting guides, developer resources',
        targetAudience: 'Microsoft developers, Azure users, .NET programmers, IT professionals',
        url: 'https://docs.microsoft.com/answers'
    },
    'dzone.com': {
        name: 'DZone',
        purpose: 'Developer news and technical content platform',
        content: 'Technical articles, industry news, developer tools reviews, programming guides',
        targetAudience: 'Professional software developers, architects, engineering managers',
        url: 'https://dzone.com'
    },
    'experts-exchange.com': {
        name: 'Experts Exchange',
        purpose: 'Premium technical Q&A platform',
        content: 'Expert-verified solutions, premium technical support, collaborative problem-solving',
        targetAudience: 'IT professionals, consultants, enterprise developers',
        url: 'https://experts-exchange.com'
    },
    'findnerd.com': {
        name: 'FindNerd',
        purpose: 'Developer community for questions and networking',
        content: 'Technical Q&A, coding challenges, developer networking, freelance opportunities',
        targetAudience: 'Freelance developers, students, startup developers',
        url: 'https://findnerd.com'
    },
    'forum.freecodecamp.org': {
        name: 'freeCodeCamp Forum',
        purpose: 'Learning community for freeCodeCamp curriculum',
        content: 'Coding help, project feedback, career advice, study groups, curriculum discussions',
        targetAudience: 'freeCodeCamp students, self-taught programmers, career changers',
        url: 'https://forum.freecodecamp.org'
    },
    'geekinterview.com': {
        name: 'GeekInterview',
        purpose: 'Technical interview preparation platform',
        content: 'Interview questions, coding challenges, career advice, job preparation resources',
        targetAudience: 'Job seekers, computer science students, software engineering candidates',
        url: 'https://geekinterview.com'
    },
    'geeksforgeeks.org': {
        name: 'GeeksforGeeks',
        purpose: 'Computer science and programming education platform',
        content: 'Data structures, algorithms, programming tutorials, interview preparation, coding contests',
        targetAudience: 'Computer science students, software engineering candidates, competitive programmers',
        url: 'https://geeksforgeeks.org'
    },
    'github.community': {
        name: 'GitHub Community',
        purpose: 'Official GitHub user community and support',
        content: 'GitHub feature discussions, user support, community guidelines, best practices',
        targetAudience: 'GitHub users, open source contributors, software developers',
        url: 'https://github.community'
    },
    'github.com/discussions (within specific repositories)': {
        name: 'GitHub Discussions',
        purpose: 'Repository-specific community discussions',
        content: 'Project-specific discussions, feature requests, community announcements, Q&A for specific repositories',
        targetAudience: 'Contributors and users of specific GitHub repositories',
        url: 'https://github.com'
    },
    'hashnode.com': {
        name: 'Hashnode',
        purpose: 'Blogging platform for developers',
        content: 'Developer blogs, technical articles, programming tutorials, developer community networking',
        targetAudience: 'Developer bloggers, technical writers, software engineers sharing knowledge',
        url: 'https://hashnode.com'
    },
    'https://langdev.stackexchange.com/': {
        name: 'Programming Language Design Stack Exchange',
        purpose: 'Q&A for programming language design and implementation',
        content: 'Language design discussions, compiler theory, interpreter implementation, language features',
        targetAudience: 'Language designers, compiler developers, programming language researchers',
        url: 'https://langdev.stackexchange.com/'
    },
    'https://sqa.stackexchange.com/': {
        name: 'Software Quality Assurance Stack Exchange',
        purpose: 'Q&A platform focused on software testing and quality assurance',
        content: 'Testing methodologies, QA processes, automation frameworks, quality assurance best practices',
        targetAudience: 'Software testers, QA engineers, test automation developers',
        url: 'https://sqa.stackexchange.com/'
    },
    'leetcode.com': {
        name: 'LeetCode',
        purpose: 'Coding interview preparation and practice platform',
        content: 'Coding challenges, algorithmic problems, interview preparation, programming contests',
        targetAudience: 'Software engineering candidates, competitive programmers, algorithm enthusiasts',
        url: 'https://leetcode.com'
    },
    'lobste.rs': {
        name: 'Lobsters',
        purpose: 'Technology-focused discussion community',
        content: 'Programming discussions, technology news, software development topics, computer science articles',
        targetAudience: 'Experienced programmers, computer science researchers, technology enthusiasts',
        url: 'https://lobste.rs'
    },
    'meta.stackexchange.com': {
        name: 'Meta Stack Exchange',
        purpose: 'Community discussion about Stack Exchange network',
        content: 'Stack Exchange governance, feature requests, community policies, network-wide discussions',
        targetAudience: 'Stack Exchange users, community moderators, platform contributors',
        url: 'https://meta.stackexchange.com'
    },
    'news.ycombinator.com': {
        name: 'Hacker News',
        purpose: 'Startup and technology news discussion platform',
        content: 'Technology news, startup discussions, programming articles, industry trends, career advice',
        targetAudience: 'Entrepreneurs, startup employees, software engineers, technology industry professionals',
        url: 'https://news.ycombinator.com'
    },
    'producthunt.com': {
        name: 'Product Hunt',
        purpose: 'Platform for discovering and launching new products',
        content: 'Product launches, startup showcases, maker community, product reviews and discussions',
        targetAudience: 'Entrepreneurs, product managers, early adopters, startup enthusiasts',
        url: 'https://producthunt.com'
    },
    'quora.com': {
        name: 'Quora',
        purpose: 'General knowledge Q&A platform',
        content: 'Questions and answers on all topics including technology, programming, career advice',
        targetAudience: 'General public, professionals, students, knowledge seekers across all fields',
        url: 'https://quora.com'
    },
    'reddit.com/r/coding': {
        name: 'r/coding',
        purpose: 'Reddit community for general programming discussions',
        content: 'Programming news, coding discussions, project showcases, career advice, memes',
        targetAudience: 'Programmers of all levels, computer science students, coding enthusiasts',
        url: 'https://reddit.com/r/coding'
    },
    'reddit.com/r/cscareerquestions': {
        name: 'r/cscareerquestions',
        purpose: 'Reddit community for computer science career advice',
        content: 'Job search advice, salary discussions, interview experiences, career transitions, industry insights',
        targetAudience: 'Computer science students, software engineering job seekers, tech professionals',
        url: 'https://reddit.com/r/cscareerquestions'
    },
    'reddit.com/r/programming': {
        name: 'r/programming',
        purpose: 'Reddit community for programming discussions and news',
        content: 'Programming news, language discussions, best practices, industry trends, technical articles',
        targetAudience: 'Professional programmers, software engineers, programming language enthusiasts',
        url: 'https://reddit.com/r/programming'
    },
    'showwcase.com': {
        name: 'Showwcase',
        purpose: 'Professional network for developers to showcase work',
        content: 'Developer portfolios, project showcases, professional networking, career opportunities',
        targetAudience: 'Software developers, freelancers, job seekers in tech, recent graduates',
        url: 'https://showwcase.com'
    },
    'sitepoint.com/community': {
        name: 'SitePoint Community',
        purpose: 'Web development learning and discussion community',
        content: 'Web development tutorials, frontend discussions, design resources, programming help',
        targetAudience: 'Web developers, frontend engineers, web designers, beginners learning web development',
        url: 'https://sitepoint.com/community'
    },
    'softwaredev.forumotion.com': {
        name: 'Software Development Forum',
        purpose: 'General software development discussion forum',
        content: 'Programming discussions, software development methodologies, project help, career advice',
        targetAudience: 'Software developers, programming students, indie developers',
        url: 'https://softwaredev.forumotion.com'
    },
    'softwareengineering.stackexchange.com': {
        name: 'Software Engineering Stack Exchange',
        purpose: 'Q&A platform for software engineering best practices',
        content: 'Software architecture, design patterns, methodology discussions, professional practices',
        targetAudience: 'Software engineers, architects, technical leads, senior developers',
        url: 'https://softwareengineering.stackexchange.com'
    },
    'stackoverflow.com': {
        name: 'Stack Overflow',
        purpose: 'Q&A platform for programming questions',
        content: 'Programming Q&A, code examples, debugging help, technical discussions across all programming languages',
        targetAudience: 'Programmers and developers of all skill levels worldwide',
        url: 'https://stackoverflow.com'
    },
    'techrepublic.com/forums': {
        name: 'TechRepublic Forums',
        purpose: 'IT professional community and resource platform',
        content: 'IT news, professional advice, technology discussions, industry analysis, career guidance',
        targetAudience: 'IT professionals, system administrators, technology managers, consultants',
        url: 'https://techrepublic.com/forums'
    },
    'webdeveloper.com': {
        name: 'WebDeveloper.com',
        purpose: 'Web development community forum',
        content: 'Web development discussions, HTML/CSS/JavaScript help, web design resources, hosting advice',
        targetAudience: 'Web developers, web designers, frontend developers, beginners learning web technologies',
        url: 'https://webdeveloper.com'
    }
};

// Research background data extracted from PDFs
const researchBackgroundData = {
    basic: {
        title: "Basic Features",
        description: "In this topic, we clustered all basic features that characterize sites selected to this research.",
        features: [
            {
                name: "Associated Site",
                description: "This feature indicates which platform this site belongs to. Expected values: reddit, stack exchange, quora and others. Some example values: reddit, stack exchange, microsoft, quora. When there are no alternatives, put None."
            },
            {
                name: "Creation date",
                description: "This feature indicates what year the site was created. The value expected is a number that represents a year that site was created. The expected value is a number that represents the creation year."
            },
            {
                name: "Website organization",
                description: "This feature indicates the way the site is organized. Expected values: in topics, in areas, in communities and other ways. Some example values: in topics, in areas, in communities. When there are no alternatives, put None."
            },
            {
                name: "Registration methods",
                description: "This feature indicates how users log in to navigate in the site. Expected values: by own registration, by facebook account, by apple id, by gmail account, by linkedin, by github account, by outlook account and other ways of registration. Some example values: own registration, apple ID, gmail account, linkedin, github account, outlook account. Allow multiple values."
            },
            {
                name: "Search engines",
                description: "This feature indicates ways of search engines inside the site. Expected values: string search, tags/labels search, similarity search and other ways. Some example values: string search, tags/labels search, similarity search. When there are no alternatives, put None. Allow multiple values."
            },
            {
                name: "Type of Audience",
                description: "This feature indicates the target technical profile of the website. Expected values: Developers, Software Engineers, Software Architects, Testers or others. Some example values: developers, software engineers, software Architects, testers. When there are no alternatives, put IT professionals. Allow multiple values."
            },
            {
                name: "Website type",
                description: "This feature indicates the type of website. Expected values: site, forum, community, blog. Some example values: forum, community, blog or website."
            },
            {
                name: "Subarea of software engineering",
                description: "This feature indicates which sub-area of software engineering the site is most focused on. Expected values: general, coding, architecture, maintenance, testing, management, and evolution. Allow multiple values. Some example values: general, coding, architecture, maintenance, testing, management, and evolution. Allow multiple values."
            }
        ],
        questions: [
            "Based on the 'Associated Site' explanation, What platform is this site linked to? The expected values: reddit, stack exchange, microsoft, quora. When there are no alternatives, put None.",
            "Based on the 'Creation date' explanation, What is the creation date? The expected value is a number that represents the creation year.",
            "Based on the 'Website organization' explanation, How are these sites organized? The expected values: in topics, in areas, in communities. When there are no alternatives, put None",
            "Based on the 'Registration methods' explanation, What are the available registration methods? The expected values: own registration, apple ID, gmail account, linkedin, github account, outlook account. Allow multiple values.",
            "Based on the 'Search engines' explanation, What search engines are available on this site? The expected values: string search, tags/labels search, similarity search. When there are no alternatives, put None. Allow multiple values.",
            "Based on the 'Type of Audience' explanation, What type of audience does this site target? The expected values: developers, software engineers, software Architects, testers. When there are no alternatives, put IT professionals. Allow multiple values.",
            "Based on the 'Website type' explanation, Is this site a forum, a community, a blog or something else? The expected values: forum, community, blog or website.",
            "Based on the 'Subarea of software engineering' explanation, Which of the sub-areas within software engineering? The expected values: general, coding, architecture, maintenance, testing, management, and evolution. Allow multiple values."
        ]
    },
    connection: {
        title: "Connection and Data Features",
        description: "In this topic, we clustered all connection and data features that characterize sites selected to this research.",
        features: [
            {
                name: "Has its own API",
                description: "This feature indicates whether the site has its own API or not. Expected values: yes or no."
            },
            {
                name: "Can download repository",
                description: "This feature indicates whether the site can download or not repository. Expected values: can or cannot."
            },
            {
                name: "Has its own Dashboard",
                description: "This feature indicates whether the site has its own dashboard or not. Expected values: yes or no."
            },
            {
                name: "Has its app",
                description: "This feature indicates whether the site has its own app or not. Expected values: yes or no."
            }
        ],
        questions: [
            "Based on the 'Has its own API' explanation, Does this site have its own API for searching data? The expected values: yes or no.",
            "Based on the 'Can download repository' explanation, Does this site allow you to download a repository? The expected values: can or cannot.",
            "Based on the 'Has its own Dashboard' explanation, Does this site have its own dashboard with general information? The expected values: yes or no.",
            "Based on the 'Has its app' explanation, Does this site have its own apps? The expected values: yes or no."
        ]
    },
    statistical: {
        title: "Statistical Features",
        description: "In this topic, we clustered all statistical features that characterize sites selected to this research.",
        features: [
            {
                name: "Daily audience",
                description: "This feature indicates the daily average of people that access the site. The value expected is a number."
            },
            {
                name: "Total users registered",
                description: "This feature indicates total users registered in the site. The response is a number."
            },
            {
                name: "Question rated",
                description: "This feature indicates how the questions are rated. Expected values: Upvoted by users, Upvoted by community, Liked by users, Liked (reactions), Editorial selection, Reactions. When there are no alternatives, put None. Allow multiple values."
            },
            {
                name: "Answer rated",
                description: "This feature indicates how the answers are rated. Expected values: Upvoted by users, Upvoted by community, Liked by users, Liked (reactions), Editorial selection, Reactions. When there are no alternatives, put None. Allow multiple values."
            },
            {
                name: "Percentual answered",
                description: "This feature indicates the percentage of questions answered on the site. The response is a number between 0 and 100."
            },
            {
                name: "Average number of interactions per question",
                description: "This feature indicates the average number of interactions in each question on the site. The response is a number."
            },
            {
                name: "Total of citations",
                description: "This feature indicates the total of citations of the site in journals, papers and other scientific documents. The response is a number."
            }
        ],
        questions: [
            "Based on the 'Daily audience' explanation, What is the size of this site's daily audience? The expected value is a number.",
            "Based on the 'Total users registered' explanation, How many users are registered on this site? The expected value is a number.",
            "Based on the 'Question rated' explanation, How is the question rated on the site? The expected values: Upvoted by users, Upvoted by community, Liked by users, Liked (reactions), Editorial selection, Reactions. When there are no alternatives, put None. Allow multiple values.",
            "Based on the 'Answer rated' explanation, How is the answer rated on the site? The expected values: Upvoted by users, Upvoted by community, Liked by users, Liked (reactions), Editorial selection, Reactions. When there are no alternatives, put None. Allow multiple values.",
            "Based on the 'Percentual answered' explanation, What percentage of the questions on this site are answered? The expected value is a number between 0 and 100.",
            "Based on the 'Average number of interactions per question' explanation, How many interactions per question on this site? The expected value is a number.",
            "Based on the 'Total of citations' explanation, How many external citations such as journals, articles does this website have? The expected value is a number."
        ]
    },
    onboard: {
        title: "On Board Features",
        description: "In this topic, we clustered all on Board features that characterize sites selected to this research.",
        features: [
            {
                name: "Moderation type",
                description: "This feature indicates the way of moderation of the questions on the site. Expected values: Moderation, Moderation + Authorization, Moderation + Community voting, Moderation + Editorial, Moderation + Paid access, Moderation + Community, Moderation + Editorial, Moderation + GitHub staff, Moderation + Google oversight, Moderation + Microsoft, Community + Moderation, Community voting + Moderation, Repo maintainers + Moderation, Invite-only + Moderation, Subreddit moderators. When there are no alternatives, put None. Allow multiple values."
            },
            {
                name: "Monetization type",
                description: "This feature indicates the monetization way used on the site. Expected values: Ads, web site ads, website services, donations, websites subscriptions, sponsorships, sponsors contents, sponsors posts, services promotions. When there are no alternatives, put None. Allow multiple values."
            },
            {
                name: "Basic required information",
                description: "This feature indicates basic information needed to post any question on the site. Expected values: User account, basic info, email, profile, payment. When there are no alternatives, put None. Allow multiple values."
            },
            {
                name: "Needed qualification",
                description: "This feature indicates if users need to have any qualification to be able to post. Expected values: None or unknown."
            },
            {
                name: "Users Ranking",
                description: "This feature indicates how users are ranked by their participation. Expected values: Badges, achievements, Reactions, Contribution scores, engagement, Contest rankings, Upvotes, Followers, likes, points. When there are no alternatives, put None."
            },
            {
                name: "Actions allowed",
                description: "This feature indicates what actions are allowed on the site. Expected values: Post, discuss, compete, reply, vote, comment, like, Share tips, follow users, react, solve problems, flag, Q&A. Allow multiple values."
            },
            {
                name: "Repository metadata",
                description: "This feature indicates if the site repository has any kind of description or not. Expected values: yes or no."
            }
        ],
        questions: [
            "Based on the 'Moderation type' explanation, How is this site moderated? The expected values: Moderation, Moderation + Authorization, Moderation + Community voting, Moderation + Editorial, Moderation + Paid access, Moderation + Community, Moderation + Editorial, Moderation + GitHub staff, Moderation + Google oversight, Moderation + Microsoft, Community + Moderation, Community voting + Moderation, Repo maintainers + Moderation, Invite-only + Moderation, Subreddit moderators. When there are no alternatives, put None. Allow multiple values.",
            "Based on the 'Monetization type' explanation, Does this site have any type of monetization? The expected values: Ads, web site ads, website services, donations, websites subscriptions, sponsorships, sponsors contents, sponsors posts, services promotions. When there are no alternatives, put None. Allow multiple values.",
            "Based on the 'Basic required information' explanation, What basic data is required to register a post on the website? The expected values: User account, basic info, email, profile, payment. When there are no alternatives, put None. Allow multiple values.",
            "Based on the 'Needed qualification' explanation, Is there any user qualification for participation on the site? The expected values: None or unknown.",
            "Based on the 'Users Ranking' explanation, How users are ranked on the site based on their participation in it? The expected values: badges, achievements, reactions, contribution scores, engagement, contest rankings, upvotes, followers, likes, points. When there are no alternatives, put None. Allow multiple values.",
            "Based on the 'Actions allowed' explanation, What actions are allowed on the website? The expected values: post, discuss, compete, reply, vote, comment, like, share tips, follow users, react, solve problems, flag, Q&A. Allow multiple values.",
            "Based on the 'Repository metadata' explanation, Does this site provide any kind of description of the repository and the site itself for consultation? The expected values: yes or no."
        ]
    },
    discussions: {
        title: "Discussions Features",
        description: "In this topic, we clustered all discussions features that characterize sites selected to this research.",
        features: [
            {
                name: "Most quoted kind of topics",
                description: "This feature indicates what the most kind of topics are cited on the site. Expected values: technical topics, behavioral topics, professional topics or miscellaneous topics. Allow multiple values."
            },
            {
                name: "Experience level",
                description: "This feature indicates the level of experience of the user. Expected values: beginners, experienced software engineers or researchers. Allow multiple values."
            },
            {
                name: "Tone of discussions",
                description: "This feature indicates the tone of discussions on the site. Expected values: collaborative, competitive or informal. Allow multiple values."
            },
            {
                name: "Quality level of answers",
                description: "This feature indicates the quality level of the answers on the site. Expected values: accurate, complete, incomplete, incomprehensible and well explained. Allow multiple values."
            },
            {
                name: "Non-technical user profile",
                description: "This feature indicates non-technical user profile. Sample values: different country languages, different cultures, different knowledge and other information. Allow multiple values."
            },
            {
                name: "Most quoted languages",
                description: "This feature indicates the most quoted languages on the site. Sample values: java, python, c++, c# and others. Allow multiple values."
            },
            {
                name: "Most quoted frameworks",
                description: "This feature indicates the most quoted frameworks on the site. Sample values: laravel, react and others. Allow multiple values."
            }
        ],
        questions: [
            "Based on the 'Most quoted kind of topics' explanation, What are the most quoted topics on the site? The expected values: technical topics, behavioral topics, professional topics or miscellaneous topics. Allow multiple values.",
            "Based on the 'Experience level' explanation, What is the experience level of the site's users? The expected values: beginners, experienced software engineers or researchers. Allow multiple values.",
            "Based on the 'Tone of discussions' explanation, What is the tone of discussions on the site? The expected values: collaborative, competitive or informal. Allow multiple values.",
            "Based on the 'Quality level of answers' explanation, What is the quality level of the answers? The expected values: accurate, complete, incomplete, incomprehensible and well explained. Allow multiple values.",
            "Based on the 'Non-technical user profile' explanation, What is the profile of the users of this site? The sample values: different country languages, different cultures, different knowledge. When there are no alternatives, put None. Allow multiple values.",
            "Based on the 'Most quoted languages' explanation, What are the most quoted languages on the site? The sample values: java, c++, c#, python, .net, and others. Allow multiple values.",
            "Based on the 'Most quoted frameworks' explanation, What are the most quoted frameworks on the site? The sample values: laravel, react, and others. Allow multiple values."
        ]
    }
};

// Expanded comparison data for all 42 sites
const comparisonData = {
    basic: {
        headers: ["Site", "Associated Site", "Creation Date", "Website Organization", "Registration Methods", "Search Engines", "Type of Audience", "Website Type", "Subarea of SE"],
        rows: [
            ["stackoverflow.com", "stack exchange", "2008", "in topics", "own registration, gmail account, github account", "string search, tags/labels search", "developers, software engineers", "forum", "general, coding"],
            ["reddit.com/r/programming", "reddit", "2005", "in communities", "own registration, gmail account", "string search", "developers", "community", "general, coding"],
            ["github.community", "github", "2017", "in topics", "github account", "string search, tags/labels search", "developers, software engineers", "forum", "general, coding, management"],
            ["dev.to", "None", "2016", "in topics", "own registration, gmail account, github account", "string search, tags/labels search", "developers", "blog", "general, coding"],
            ["geeksforgeeks.org", "None", "2009", "in topics", "own registration, gmail account", "string search", "developers, software engineers", "website", "general, coding, testing"],
            ["reddit.com/r/coding", "reddit", "2006", "in communities", "own registration, gmail account", "string search", "developers", "community", "general, coding"],
            ["reddit.com/r/cscareerquestions", "reddit", "2012", "in communities", "own registration, gmail account", "string search", "developers, software engineers", "community", "professional, management"],
            ["hashnode.com", "None", "2020", "in topics", "own registration, gmail account, github account", "string search, tags/labels search", "developers", "blog", "general, coding"],
            ["leetcode.com", "None", "2015", "in topics", "own registration, gmail account, linkedin", "string search, tags/labels search", "developers, software engineers", "website", "coding, testing"],
            ["news.ycombinator.com", "None", "2007", "in topics", "own registration", "string search", "developers, software engineers", "forum", "general, professional"],
            ["meta.stackexchange.com", "stack exchange", "2009", "in topics", "own registration, gmail account, github account", "string search, tags/labels search", "developers, software engineers", "forum", "general, management"],
            ["softwareengineering.stackexchange.com", "stack exchange", "2010", "in topics", "own registration, gmail account, github account", "string search, tags/labels search", "software engineers, software architects", "forum", "general, architecture, management"],
            ["https://sqa.stackexchange.com/", "stack exchange", "2012", "in topics", "own registration, gmail account, github account", "string search, tags/labels search", "testers, software engineers", "forum", "testing"],
            ["https://langdev.stackexchange.com/", "stack exchange", "2020", "in topics", "own registration, gmail account, github account", "string search, tags/labels search", "developers, software engineers", "forum", "coding, evolution"],
            ["quora.com", "quora", "2009", "in topics", "own registration, gmail account, apple id", "string search", "IT professionals", "forum", "general, professional"],
            ["developers.google.com/community", "google", "2005", "in topics", "gmail account", "string search", "developers, software engineers", "community", "general, coding"],
            ["docs.microsoft.com/answers", "microsoft", "2009", "in topics", "outlook account", "string search", "developers, IT professionals", "forum", "general, maintenance"],
            ["dzone.com", "None", "2001", "in topics", "own registration, gmail account, linkedin", "string search, tags/labels search", "developers, software engineers", "website", "general, coding, architecture"],
            ["codeproject.com", "None", "1999", "in topics", "own registration, gmail account", "string search", "developers, software engineers", "website", "general, coding"],
            ["daniweb.com", "None", "2002", "in topics", "own registration, gmail account", "string search", "developers", "forum", "general, coding"],
            ["bytes.com", "None", "1999", "in topics", "own registration", "string search", "developers", "forum", "general, coding"],
            ["codeguru.com", "None", "1996", "in topics", "own registration", "string search", "developers, software engineers", "website", "general, coding"],
            ["forum.freecodecamp.org", "None", "2014", "in topics", "own registration, gmail account, github account", "string search", "developers", "forum", "general, coding"],
            ["sitepoint.com/community", "None", "1999", "in topics", "own registration, gmail account", "string search", "developers", "forum", "coding"],
            ["webdeveloper.com", "None", "2000", "in topics", "own registration", "string search", "developers", "forum", "coding"],
            ["digitalocean.com/community", "None", "2011", "in topics", "own registration, gmail account, github account", "string search, tags/labels search", "developers", "community", "general, coding, maintenance"],
            ["discuss.codecademy.com", "None", "2011", "in topics", "own registration, gmail account", "string search", "developers", "forum", "coding"],
            ["codementor.io/community", "None", "2014", "in communities", "own registration, gmail account, github account", "string search", "developers", "community", "general, coding"],
            ["coderwall.com", "None", "2011", "in areas", "own registration, gmail account, github account", "string search, tags/labels search", "developers", "community", "general, coding"],
            ["devhubby.com", "None", "2020", "in topics", "own registration, gmail account", "string search", "developers", "website", "coding"],
            ["experts-exchange.com", "None", "1996", "in topics", "own registration", "string search", "IT professionals", "forum", "general, maintenance"],
            ["findnerd.com", "None", "2014", "in topics", "own registration, gmail account", "string search", "developers", "forum", "coding"],
            ["geekinterview.com", "None", "2006", "in topics", "own registration", "string search", "developers, software engineers", "website", "professional, coding"],
            ["lobste.rs", "None", "2012", "in topics", "own registration", "string search", "developers, software engineers", "community", "general, coding"],
            ["producthunt.com", "None", "2013", "in topics", "own registration, gmail account", "string search", "IT professionals", "community", "professional"],
            ["showwcase.com", "None", "2020", "in areas", "own registration, gmail account, github account", "string search", "developers", "community", "general, coding"],
            ["softwaredev.forumotion.com", "None", "2008", "in topics", "own registration", "string search", "developers, software engineers", "forum", "general, coding"],
            ["community.spiceworks.com", "None", "2006", "in topics", "own registration, gmail account", "string search", "IT professionals", "community", "general, maintenance"],
            ["techrepublic.com/forums", "None", "1999", "in topics", "own registration", "string search", "IT professionals", "forum", "general, management"],
            ["https://beecrowd.com/community/", "None", "2010", "in topics", "own registration, gmail account", "string search", "developers", "community", "coding, testing"],
            ["github.com/discussions", "github", "2020", "in topics", "github account", "string search, tags/labels search", "developers, software engineers", "forum", "general, coding, management"]
        ]
    },
    connection: {
        headers: ["Site", "Has API", "Can Download Repository", "Has Dashboard", "Has App"],
        rows: [
            ["stackoverflow.com", "yes", "cannot", "yes", "yes"],
            ["reddit.com/r/programming", "yes", "cannot", "yes", "yes"],
            ["github.community", "yes", "can", "yes", "yes"],
            ["dev.to", "yes", "cannot", "yes", "yes"],
            ["geeksforgeeks.org", "no", "cannot", "no", "yes"],
            ["reddit.com/r/coding", "yes", "cannot", "yes", "yes"],
            ["reddit.com/r/cscareerquestions", "yes", "cannot", "yes", "yes"],
            ["hashnode.com", "yes", "cannot", "yes", "yes"],
            ["leetcode.com", "yes", "cannot", "yes", "yes"],
            ["news.ycombinator.com", "yes", "cannot", "no", "yes"],
            ["meta.stackexchange.com", "yes", "cannot", "yes", "yes"],
            ["softwareengineering.stackexchange.com", "yes", "cannot", "yes", "yes"],
            ["https://sqa.stackexchange.com/", "yes", "cannot", "yes", "yes"],
            ["https://langdev.stackexchange.com/", "yes", "cannot", "yes", "yes"],
            ["quora.com", "no", "cannot", "yes", "yes"],
            ["developers.google.com/community", "yes", "cannot", "yes", "yes"],
            ["docs.microsoft.com/answers", "yes", "cannot", "yes", "yes"],
            ["dzone.com", "no", "cannot", "yes", "no"],
            ["codeproject.com", "no", "cannot", "yes", "no"],
            ["daniweb.com", "no", "cannot", "no", "no"],
            ["bytes.com", "no", "cannot", "no", "no"],
            ["codeguru.com", "no", "cannot", "no", "no"],
            ["forum.freecodecamp.org", "no", "cannot", "yes", "no"],
            ["sitepoint.com/community", "no", "cannot", "yes", "no"],
            ["webdeveloper.com", "no", "cannot", "no", "no"],
            ["digitalocean.com/community", "yes", "cannot", "yes", "yes"],
            ["discuss.codecademy.com", "no", "cannot", "yes", "yes"],
            ["codementor.io/community", "yes", "cannot", "yes", "yes"],
            ["coderwall.com", "no", "cannot", "yes", "no"],
            ["devhubby.com", "no", "cannot", "no", "no"],
            ["experts-exchange.com", "no", "cannot", "yes", "no"],
            ["findnerd.com", "no", "cannot", "no", "no"],
            ["geekinterview.com", "no", "cannot", "no", "no"],
            ["lobste.rs", "no", "cannot", "no", "no"],
            ["producthunt.com", "yes", "cannot", "yes", "yes"],
            ["showwcase.com", "no", "cannot", "yes", "no"],
            ["softwaredev.forumotion.com", "no", "cannot", "no", "no"],
            ["community.spiceworks.com", "no", "cannot", "yes", "no"],
            ["techrepublic.com/forums", "no", "cannot", "yes", "no"],
            ["https://beecrowd.com/community/", "no", "cannot", "yes", "yes"],
            ["github.com/discussions", "yes", "can", "yes", "yes"]
        ]
    },
    statistical: {
        headers: ["Site", "Daily Audience", "Total Users", "Question Rating", "Answer Rating", "% Answered", "Avg Interactions", "Total Citations"],
        rows: [
            ["stackoverflow.com", "21000000", "14000000", "Upvoted by users", "Upvoted by users", "70", "15", "150000"],
            ["reddit.com/r/programming", "2500000", "3200000", "Upvoted by users", "Upvoted by users", "45", "25", "25000"],
            ["github.community", "500000", "800000", "Reactions", "Reactions", "65", "8", "5000"],
            ["dev.to", "1200000", "900000", "Liked by users", "Liked by users", "55", "12", "8000"],
            ["geeksforgeeks.org", "8000000", "2500000", "Liked by users", "Liked by users", "80", "6", "35000"],
            ["reddit.com/r/coding", "1800000", "2800000", "Upvoted by users", "Upvoted by users", "40", "20", "18000"],
            ["reddit.com/r/cscareerquestions", "800000", "1500000", "Upvoted by users", "Upvoted by users", "65", "18", "12000"],
            ["hashnode.com", "600000", "400000", "Liked by users", "Liked by users", "70", "10", "3000"],
            ["leetcode.com", "3000000", "1200000", "Liked by users", "Liked by users", "85", "5", "15000"],
            ["news.ycombinator.com", "5000000", "500000", "Upvoted by users", "Upvoted by users", "30", "35", "45000"],
            ["meta.stackexchange.com", "300000", "500000", "Upvoted by users", "Upvoted by users", "75", "12", "8000"],
            ["softwareengineering.stackexchange.com", "400000", "180000", "Upvoted by users", "Upvoted by users", "68", "14", "25000"],
            ["https://sqa.stackexchange.com/", "150000", "45000", "Upvoted by users", "Upvoted by users", "72", "11", "5500"],
            ["https://langdev.stackexchange.com/", "50000", "8000", "Upvoted by users", "Upvoted by users", "65", "9", "800"],
            ["quora.com", "15000000", "30000000", "Upvoted by users", "Upvoted by users", "60", "8", "80000"],
            ["developers.google.com/community", "2000000", "1000000", "Reactions", "Reactions", "50", "7", "15000"],
            ["docs.microsoft.com/answers", "3000000", "2000000", "Upvoted by community", "Upvoted by community", "55", "9", "20000"],
            ["dzone.com", "1500000", "800000", "Liked by users", "Liked by users", "45", "6", "12000"],
            ["codeproject.com", "2000000", "1500000", "Upvoted by users", "Upvoted by users", "75", "8", "28000"],
            ["daniweb.com", "500000", "600000", "Upvoted by users", "Upvoted by users", "60", "10", "8500"],
            ["bytes.com", "300000", "400000", "None", "None", "55", "7", "6000"],
            ["codeguru.com", "400000", "500000", "None", "None", "70", "6", "12000"],
            ["forum.freecodecamp.org", "1000000", "2000000", "Upvoted by users", "Upvoted by users", "80", "15", "18000"],
            ["sitepoint.com/community", "800000", "900000", "Upvoted by users", "Upvoted by users", "65", "12", "15000"],
            ["webdeveloper.com", "600000", "800000", "None", "None", "50", "8", "10000"],
            ["digitalocean.com/community", "2500000", "1800000", "Upvoted by users", "Upvoted by users", "70", "10", "22000"],
            ["discuss.codecademy.com", "400000", "600000", "Upvoted by users", "Upvoted by users", "75", "12", "5000"],
            ["codementor.io/community", "300000", "200000", "Upvoted by users", "Upvoted by users", "80", "8", "3500"],
            ["coderwall.com", "200000", "150000", "Liked by users", "Liked by users", "45", "6", "2800"],
            ["devhubby.com", "100000", "50000", "None", "None", "60", "4", "500"],
            ["experts-exchange.com", "1200000", "2500000", "Upvoted by users", "Upvoted by users", "85", "12", "35000"],
            ["findnerd.com", "80000", "120000", "Upvoted by users", "Upvoted by users", "55", "7", "1200"],
            ["geekinterview.com", "200000", "300000", "None", "None", "70", "5", "3000"],
            ["lobste.rs", "150000", "25000", "Upvoted by users", "Upvoted by users", "40", "20", "2500"],
            ["producthunt.com", "8000000", "5000000", "Upvoted by users", "Upvoted by users", "25", "15", "12000"],
            ["showwcase.com", "100000", "80000", "Liked by users", "Liked by users", "60", "8", "800"],
            ["softwaredev.forumotion.com", "50000", "15000", "None", "None", "50", "6", "200"],
            ["community.spiceworks.com", "1500000", "3000000", "Upvoted by users", "Upvoted by users", "70", "10", "18000"],
            ["techrepublic.com/forums", "2000000", "1500000", "None", "None", "45", "8", "25000"],
            ["https://beecrowd.com/community/", "300000", "150000", "None", "None", "60", "5", "1500"],
            ["github.com/discussions", "1000000", "500000", "Reactions", "Reactions", "55", "12", "8000"]
        ]
    },
    onboard: {
        headers: ["Site", "Moderation Type", "Monetization", "Required Info", "Needed Qualification", "User Ranking", "Actions Allowed"],
        rows: [
            ["stackoverflow.com", "Community + Moderation", "Ads, website services", "User account, email", "None", "Badges, points", "Post, vote, comment, flag, Q&A"],
            ["reddit.com/r/programming", "Subreddit moderators", "Ads", "User account, email", "None", "Upvotes, points", "Post, vote, comment, share tips"],
            ["github.community", "Moderation + GitHub staff", "None", "github account", "None", "Badges, reactions", "Post, discuss, react, Q&A"],
            ["dev.to", "Community + Moderation", "Sponsors posts", "User account, email", "None", "Reactions, followers", "Post, comment, like, follow users"],
            ["geeksforgeeks.org", "Moderation + Editorial", "Ads, website services", "User account, email", "None", "Points, badges", "Post, comment, solve problems"],
            ["reddit.com/r/coding", "Subreddit moderators", "Ads", "User account, email", "None", "Upvotes, points", "Post, vote, comment, share tips"],
            ["reddit.com/r/cscareerquestions", "Subreddit moderators", "Ads", "User account, email", "None", "Upvotes, points", "Post, vote, comment, share tips"],
            ["hashnode.com", "Community + Moderation", "Sponsors posts", "User account, email", "None", "Reactions, followers", "Post, comment, like, follow users"],
            ["leetcode.com", "Moderation + Editorial", "Website subscriptions", "User account, email", "None", "Points, contest rankings", "Post, compete, solve problems"],
            ["news.ycombinator.com", "Community + Moderation", "None", "User account", "None", "Points", "Post, vote, comment"],
            ["meta.stackexchange.com", "Community + Moderation", "Ads, website services", "User account, email", "None", "Badges, points", "Post, vote, comment, flag, Q&A"],
            ["softwareengineering.stackexchange.com", "Community + Moderation", "Ads, website services", "User account, email", "None", "Badges, points", "Post, vote, comment, flag, Q&A"],
            ["https://sqa.stackexchange.com/", "Community + Moderation", "Ads, website services", "User account, email", "None", "Badges, points", "Post, vote, comment, flag, Q&A"],
            ["https://langdev.stackexchange.com/", "Community + Moderation", "Ads, website services", "User account, email", "None", "Badges, points", "Post, vote, comment, flag, Q&A"],
            ["quora.com", "Moderation + Community voting", "Ads, website subscriptions", "User account, basic info", "None", "Followers, upvotes", "Post, vote, comment, follow users"],
            ["developers.google.com/community", "Moderation + Google oversight", "None", "Gmail account", "None", "Badges, points", "Post, discuss, react"],
            ["docs.microsoft.com/answers", "Moderation + Microsoft", "None", "Outlook account", "None", "Points, badges", "Post, vote, comment, Q&A"],
            ["dzone.com", "Moderation + Editorial", "Ads, sponsors contents", "User account, email", "None", "Points, badges", "Post, comment, like"],
            ["codeproject.com", "Moderation + Editorial", "Ads, website services", "User account, email", "None", "Points, badges", "Post, vote, comment"],
            ["daniweb.com", "Community + Moderation", "Ads", "User account, email", "None", "Points, badges", "Post, vote, comment, Q&A"],
            ["bytes.com", "Moderation", "Ads", "User account", "None", "None", "Post, reply, comment"],
            ["codeguru.com", "Moderation", "Ads", "User account", "None", "None", "Post, reply, comment"],
            ["forum.freecodecamp.org", "Community + Moderation", "Donations", "User account, email", "None", "Badges, points", "Post, vote, comment, Q&A"],
            ["sitepoint.com/community", "Community + Moderation", "Website subscriptions", "User account, email", "None", "Points, badges", "Post, vote, comment"],
            ["webdeveloper.com", "Moderation", "Ads", "User account", "None", "None", "Post, reply, comment"],
            ["digitalocean.com/community", "Community + Moderation", "Website services", "User account, email", "None", "Points, badges", "Post, vote, comment, Q&A"],
            ["discuss.codecademy.com", "Community + Moderation", "Website subscriptions", "User account, email", "None", "Points, badges", "Post, vote, comment, Q&A"],
            ["codementor.io/community", "Community + Moderation", "Website services", "User account, email", "None", "Points, badges", "Post, vote, comment"],
            ["coderwall.com", "Community + Moderation", "Sponsors posts", "User account, email", "None", "Badges, followers", "Post, like, follow users"],
            ["devhubby.com", "Moderation", "Ads", "User account, email", "None", "None", "Post, comment"],
            ["experts-exchange.com", "Moderation + Paid access", "Website subscriptions", "User account, email, payment", "None", "Points, badges", "Post, vote, comment, Q&A"],
            ["findnerd.com", "Community + Moderation", "Ads", "User account, email", "None", "Points", "Post, vote, comment"],
            ["geekinterview.com", "Moderation", "Ads", "User account", "None", "None", "Post, reply"],
            ["lobste.rs", "Invite-only + Moderation", "None", "User account", "Invite required", "Points", "Post, vote, comment"],
            ["producthunt.com", "Community + Moderation", "Ads, sponsors posts", "User account, email", "None", "Upvotes, followers", "Post, vote, comment, follow users"],
            ["showwcase.com", "Community + Moderation", "Sponsors posts", "User account, email", "None", "Reactions, followers", "Post, like, follow users"],
            ["softwaredev.forumotion.com", "Moderation", "None", "User account", "None", "None", "Post, reply"],
            ["community.spiceworks.com", "Community + Moderation", "Sponsors contents", "User account, email", "None", "Points, badges", "Post, vote, comment"],
            ["techrepublic.com/forums", "Moderation", "Ads", "User account", "None", "None", "Post, reply, comment"],
            ["https://beecrowd.com/community/", "Community + Moderation", "None", "User account, email", "None", "Points, contest rankings", "Post, compete, solve problems"],
            ["github.com/discussions", "Repo maintainers + Moderation", "None", "GitHub account", "None", "Reactions, followers", "Post, discuss, react"]
        ]
    },
    discussions: {
        headers: ["Site", "Most Quoted Topics", "Experience Level", "Discussion Tone", "Answer Quality", "User Profile", "Most Languages", "Most Frameworks"],
        rows: [
            ["stackoverflow.com", "technical topics", "beginners, experienced software engineers", "collaborative", "accurate, complete, well explained", "different country languages, different cultures", "java, python, c++, javascript", "react, angular, spring"],
            ["reddit.com/r/programming", "technical topics, professional topics", "beginners, experienced software engineers", "collaborative, informal", "complete, well explained", "different country languages, different cultures", "python, javascript, java", "react, vue, django"],
            ["github.community", "technical topics", "experienced software engineers", "collaborative", "accurate, complete", "different country languages", "javascript, python, go", "react, node.js, docker"],
            ["dev.to", "technical topics, professional topics", "beginners, experienced software engineers", "collaborative, informal", "well explained", "different country languages, different cultures", "javascript, python, react", "react, vue, node.js"],
            ["geeksforgeeks.org", "technical topics", "beginners", "collaborative", "complete, well explained", "different country languages", "java, python, c++", "spring, django, react"],
            ["reddit.com/r/coding", "technical topics", "beginners, experienced software engineers", "collaborative, informal", "complete", "different country languages, different cultures", "python, javascript, c++", "react, django, flask"],
            ["reddit.com/r/cscareerquestions", "professional topics, behavioral topics", "beginners, experienced software engineers", "informal", "well explained", "different country languages, different cultures", "java, python, javascript", "react, spring, django"],
            ["hashnode.com", "technical topics, professional topics", "beginners, experienced software engineers", "collaborative", "well explained", "different country languages, different cultures", "javascript, python, java", "react, vue, express"],
            ["leetcode.com", "technical topics", "beginners, experienced software engineers", "competitive", "accurate, complete", "different country languages", "java, python, c++", "None"],
            ["news.ycombinator.com", "technical topics, professional topics", "experienced software engineers", "competitive, collaborative", "complete, well explained", "different country languages, different cultures", "python, javascript, go", "react, django, node.js"],
            ["meta.stackexchange.com", "miscellaneous topics", "experienced software engineers", "collaborative", "accurate, complete", "different country languages", "None", "None"],
            ["softwareengineering.stackexchange.com", "technical topics, professional topics", "experienced software engineers, software architects", "collaborative", "accurate, complete, well explained", "different country languages, different cultures", "java, c#, python", "spring, .net, django"],
            ["https://sqa.stackexchange.com/", "technical topics", "experienced software engineers, testers", "collaborative", "accurate, complete, well explained", "different country languages", "java, c#, python", "selenium, junit, testng"],
            ["https://langdev.stackexchange.com/", "technical topics", "experienced software engineers, researchers", "collaborative", "accurate, complete", "different country languages", "c++, python, rust", "llvm, antlr"],
            ["quora.com", "technical topics, professional topics, miscellaneous topics", "beginners, experienced software engineers", "informal", "complete", "different country languages, different cultures, different knowledge", "java, python, javascript", "react, spring, django"],
            ["developers.google.com/community", "technical topics", "experienced software engineers", "collaborative", "accurate, complete", "different country languages", "javascript, python, java", "angular, firebase, tensorflow"],
            ["docs.microsoft.com/answers", "technical topics", "developers, IT professionals", "collaborative", "accurate, complete", "different country languages", "c#, python, javascript", ".net, azure, react"],
            ["dzone.com", "technical topics, professional topics", "experienced software engineers", "collaborative", "complete, well explained", "different country languages", "java, python, javascript", "spring, react, microservices"],
            ["codeproject.com", "technical topics", "experienced software engineers", "collaborative", "complete, well explained", "different country languages", "c#, c++, java", ".net, win32, mfc"],
            ["daniweb.com", "technical topics", "beginners, experienced software engineers", "collaborative", "complete", "different country languages", "python, java, c++", "django, swing, qt"],
            ["bytes.com", "technical topics", "beginners, experienced software engineers", "collaborative", "complete", "different country languages", "python, php, java", "django, laravel, spring"],
            ["codeguru.com", "technical topics", "experienced software engineers", "collaborative", "complete", "different country languages", "c++, c#, java", "mfc, .net, win32"],
            ["forum.freecodecamp.org", "technical topics", "beginners", "collaborative", "well explained", "different country languages, different cultures", "javascript, python, html", "react, node.js, express"],
            ["sitepoint.com/community", "technical topics", "beginners, experienced software engineers", "collaborative", "well explained", "different country languages", "javascript, php, css", "react, vue, laravel"],
            ["webdeveloper.com", "technical topics", "beginners, experienced software engineers", "collaborative", "complete", "different country languages", "javascript, php, html", "jquery, bootstrap, laravel"],
            ["digitalocean.com/community", "technical topics", "experienced software engineers", "collaborative", "complete, well explained", "different country languages", "python, javascript, php", "django, react, laravel"],
            ["discuss.codecademy.com", "technical topics", "beginners", "collaborative", "well explained", "different country languages, different cultures", "python, javascript, java", "react, django, spring"],
            ["codementor.io/community", "technical topics, professional topics", "experienced software engineers", "collaborative", "complete, well explained", "different country languages", "python, javascript, java", "react, django, spring"],
            ["coderwall.com", "technical topics", "experienced software engineers", "collaborative", "complete", "different country languages", "ruby, javascript, python", "rails, react, django"],
            ["devhubby.com", "technical topics", "beginners", "collaborative", "complete", "different country languages", "python, javascript, php", "django, react, laravel"],
            ["experts-exchange.com", "technical topics", "IT professionals, experienced software engineers", "collaborative", "accurate, complete", "different country languages", "c#, java, python", ".net, spring, django"],
            ["findnerd.com", "technical topics", "beginners, experienced software engineers", "collaborative", "complete", "different country languages", "php, javascript, java", "laravel, react, spring"],
            ["geekinterview.com", "technical topics, professional topics", "experienced software engineers", "collaborative", "complete", "different country languages", "java, c++, python", "spring, hibernate, django"],
            ["lobste.rs", "technical topics", "experienced software engineers", "collaborative", "complete, well explained", "different cultures", "rust, go, c++", "None"],
            ["producthunt.com", "professional topics", "IT professionals", "informal", "complete", "different country languages, different cultures", "None", "None"],
            ["showwcase.com", "technical topics, professional topics", "beginners, experienced software engineers", "collaborative", "complete", "different country languages, different cultures", "javascript, python, java", "react, django, spring"],
            ["softwaredev.forumotion.com", "technical topics", "beginners, experienced software engineers", "collaborative", "complete", "different country languages", "java, c++, python", "spring, qt, django"],
            ["community.spiceworks.com", "technical topics", "IT professionals", "collaborative", "complete", "different country languages", "powershell, python, bash", "None"],
            ["techrepublic.com/forums", "technical topics, professional topics", "IT professionals", "collaborative", "complete", "different country languages", "None", "None"],
            ["https://beecrowd.com/community/", "technical topics", "beginners, experienced software engineers", "competitive", "complete", "different country languages", "c++, java, python", "None"],
            ["github.com/discussions", "technical topics", "experienced software engineers", "collaborative", "complete", "different country languages", "javascript, python, go", "react, django, kubernetes"]
        ]
    }
};

// Global variables for filtering
let currentCategory = null;
let currentTableData = null;

// DOM Elements
const sitesContainer = document.getElementById('sites-container');
const topicButtons = document.querySelectorAll('.topic-btn');
const topicContent = document.getElementById('topic-content');
const comparisonButtons = document.querySelectorAll('.comparison-btn');
const comparisonContent = document.getElementById('comparison-content');
const exportButtons = document.querySelectorAll('.export-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadSitesList();
    setupEventListeners();
});

// Load sites list in alphabetical order with 5 columns
function loadSitesList() {
    sitesContainer.innerHTML = '';
    
    // Create main table
    const table = document.createElement('table');
    table.className = 'sites-table';
    
    // Create header
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.colSpan = 5;
    headerCell.textContent = 'Software Engineering Gray Literature Sites (Alphabetical Order)';
    table.appendChild(headerRow);
    
    // Add sites in rows of 5
    for (let i = 0; i < sitesData.length; i += 5) {
        const row = document.createElement('tr');
        
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('td');
            
            if (i + j < sitesData.length) {
                const siteUrl = sitesData[i + j];
                const siteInfo = siteDescriptions[siteUrl];
                
                const link = document.createElement('a');
                link.href = '#';
                link.textContent = siteInfo.name;
                link.title = `Click to view details about ${siteInfo.name}`;
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    showSiteDetails(siteUrl);
                });
                
                cell.appendChild(link);
            } else {
                cell.textContent = '-';
                cell.style.color = '#ccc';
            }
            
            row.appendChild(cell);
        }
        
        table.appendChild(row);
    }
    
    sitesContainer.appendChild(table);
}

// Show site details in a modal or new section
function showSiteDetails(siteUrl) {
    const siteInfo = siteDescriptions[siteUrl];
    const basicData = comparisonData.basic.rows.find(row => row[0] === siteUrl.replace(/^https?:\/\//, ''));
    const connectionData = comparisonData.connection.rows.find(row => row[0] === siteUrl.replace(/^https?:\/\//, ''));
    const statisticalData = comparisonData.statistical.rows.find(row => row[0] === siteUrl.replace(/^https?:\/\//, ''));
    const onboardData = comparisonData.onboard.rows.find(row => row[0] === siteUrl.replace(/^https?:\/\//, ''));
    const discussionsData = comparisonData.discussions.rows.find(row => row[0] === siteUrl.replace(/^https?:\/\//, ''));
    
    const detailContent = `
        <div class="site-detail-modal">
            <div class="site-detail-content">
                <div class="site-detail-header">
                    <h2>${siteInfo.name}</h2>
                    <button class="close-detail" onclick="closeSiteDetails()">&times;</button>
                </div>
                
                <div class="site-detail-body">
                    <div class="site-overview">
                        <h3>Site Overview</h3>
                        <div class="overview-grid">
                            <div><strong>Purpose:</strong> ${siteInfo.purpose}</div>
                            <div><strong>Content:</strong> ${siteInfo.content}</div>
                            <div><strong>Target Audience:</strong> ${siteInfo.targetAudience}</div>
                            <div><strong>URL:</strong> <a href="${siteInfo.url}" target="_blank">${siteInfo.url}</a></div>
                        </div>
                    </div>
                    
                    ${generateFeatureAnalysis(basicData, connectionData, statisticalData, onboardData, discussionsData)}
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.querySelector('.site-detail-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', detailContent);
}

// Close site details modal
function closeSiteDetails() {
    const modal = document.querySelector('.site-detail-modal');
    if (modal) {
        modal.remove();
    }
}

// Generate feature analysis for site details
function generateFeatureAnalysis(basicData, connectionData, statisticalData, onboardData, discussionsData) {
    return `
        <div class="feature-analysis">
            <h3>Feature Analysis</h3>
            
            <div class="feature-category">
                <h4>Basic Features</h4>
                <div class="feature-grid">
                    <div><strong>Associated Site:</strong> ${basicData[1]}</div>
                    <div><strong>Creation Date:</strong> ${basicData[2]}</div>
                    <div><strong>Website Organization:</strong> ${basicData[3]}</div>
                    <div><strong>Registration Methods:</strong> ${basicData[4]}</div>
                    <div><strong>Search Engines:</strong> ${basicData[5]}</div>
                    <div><strong>Type of Audience:</strong> ${basicData[6]}</div>
                    <div><strong>Website Type:</strong> ${basicData[7]}</div>
                    <div><strong>Subarea of SE:</strong> ${basicData[8]}</div>
                </div>
            </div>
            
            <div class="feature-category">
                <h4>Connection and Data Features</h4>
                <div class="feature-grid">
                    <div><strong>Has API:</strong> ${connectionData[1]}</div>
                    <div><strong>Can Download Repository:</strong> ${connectionData[2]}</div>
                    <div><strong>Has Dashboard:</strong> ${connectionData[3]}</div>
                    <div><strong>Has App:</strong> ${connectionData[4]}</div>
                </div>
            </div>
            
            <div class="feature-category">
                <h4>Statistical Features</h4>
                <div class="feature-grid">
                    <div><strong>Daily Audience:</strong> ${parseInt(statisticalData[1]).toLocaleString()}</div>
                    <div><strong>Total Users:</strong> ${parseInt(statisticalData[2]).toLocaleString()}</div>
                    <div><strong>Question Rating:</strong> ${statisticalData[3]}</div>
                    <div><strong>Answer Rating:</strong> ${statisticalData[4]}</div>
                    <div><strong>% Answered:</strong> ${statisticalData[5]}%</div>
                    <div><strong>Avg Interactions:</strong> ${statisticalData[6]}</div>
                    <div><strong>Total Citations:</strong> ${parseInt(statisticalData[7]).toLocaleString()}</div>
                </div>
            </div>
            
            <div class="feature-category">
                <h4>On Board Features</h4>
                <div class="feature-grid">
                    <div><strong>Moderation Type:</strong> ${onboardData[1]}</div>
                    <div><strong>Monetization:</strong> ${onboardData[2]}</div>
                    <div><strong>Required Info:</strong> ${onboardData[3]}</div>
                    <div><strong>Needed Qualification:</strong> ${onboardData[4]}</div>
                    <div><strong>User Ranking:</strong> ${onboardData[5]}</div>
                    <div><strong>Actions Allowed:</strong> ${onboardData[6]}</div>
                </div>
            </div>
            
            <div class="feature-category">
                <h4>Discussions Features</h4>
                <div class="feature-grid">
                    <div><strong>Most Quoted Topics:</strong> ${discussionsData[1]}</div>
                    <div><strong>Experience Level:</strong> ${discussionsData[2]}</div>
                    <div><strong>Discussion Tone:</strong> ${discussionsData[3]}</div>
                    <div><strong>Answer Quality:</strong> ${discussionsData[4]}</div>
                    <div><strong>User Profile:</strong> ${discussionsData[5]}</div>
                    <div><strong>Most Languages:</strong> ${discussionsData[6]}</div>
                    <div><strong>Most Frameworks:</strong> ${discussionsData[7]}</div>
                </div>
            </div>
            
            <div class="questions-answers">
                <h4>Research Questions and Answers</h4>
                ${generateQuestionsAndAnswers(basicData, connectionData, statisticalData, onboardData, discussionsData)}
            </div>
        </div>
    `;
}

// Generate questions and answers section
function generateQuestionsAndAnswers(basicData, connectionData, statisticalData, onboardData, discussionsData) {
    return `
        <div class="qa-section">
            <h5>Basic Features Questions:</h5>
            <ol class="qa-list">
                <li><strong>Q:</strong> What platform is this site linked to?<br><strong>A:</strong> ${basicData[1]}</li>
                <li><strong>Q:</strong> What is the creation date?<br><strong>A:</strong> ${basicData[2]}</li>
                <li><strong>Q:</strong> How are these sites organized?<br><strong>A:</strong> ${basicData[3]}</li>
                <li><strong>Q:</strong> What are the available registration methods?<br><strong>A:</strong> ${basicData[4]}</li>
                <li><strong>Q:</strong> What search engines are available?<br><strong>A:</strong> ${basicData[5]}</li>
                <li><strong>Q:</strong> What type of audience does this site target?<br><strong>A:</strong> ${basicData[6]}</li>
                <li><strong>Q:</strong> Is this site a forum, community, blog or something else?<br><strong>A:</strong> ${basicData[7]}</li>
                <li><strong>Q:</strong> Which sub-areas within software engineering?<br><strong>A:</strong> ${basicData[8]}</li>
            </ol>
            
            <h5>Connection and Data Features Questions:</h5>
            <ol class="qa-list">
                <li><strong>Q:</strong> Does this site have its own API for searching data?<br><strong>A:</strong> ${connectionData[1]}</li>
                <li><strong>Q:</strong> Does this site allow you to download a repository?<br><strong>A:</strong> ${connectionData[2]}</li>
                <li><strong>Q:</strong> Does this site have its own dashboard?<br><strong>A:</strong> ${connectionData[3]}</li>
                <li><strong>Q:</strong> Does this site have its own apps?<br><strong>A:</strong> ${connectionData[4]}</li>
            </ol>
            
            <h5>Statistical Features Questions:</h5>
            <ol class="qa-list">
                <li><strong>Q:</strong> What is the size of this site's daily audience?<br><strong>A:</strong> ${parseInt(statisticalData[1]).toLocaleString()} users</li>
                <li><strong>Q:</strong> How many users are registered on this site?<br><strong>A:</strong> ${parseInt(statisticalData[2]).toLocaleString()} users</li>
                <li><strong>Q:</strong> How is the question rated on the site?<br><strong>A:</strong> ${statisticalData[3]}</li>
                <li><strong>Q:</strong> How is the answer rated on the site?<br><strong>A:</strong> ${statisticalData[4]}</li>
                <li><strong>Q:</strong> What percentage of questions are answered?<br><strong>A:</strong> ${statisticalData[5]}%</li>
                <li><strong>Q:</strong> How many interactions per question on this site?<br><strong>A:</strong> ${statisticalData[6]} interactions</li>
                <li><strong>Q:</strong> How many external citations does this website have?<br><strong>A:</strong> ${parseInt(statisticalData[7]).toLocaleString()} citations</li>
            </ol>
            
            <h5>On Board Features Questions:</h5>
            <ol class="qa-list">
                <li><strong>Q:</strong> How is this site moderated?<br><strong>A:</strong> ${onboardData[1]}</li>
                <li><strong>Q:</strong> Does this site have any type of monetization?<br><strong>A:</strong> ${onboardData[2]}</li>
                <li><strong>Q:</strong> What basic data is required to register a post?<br><strong>A:</strong> ${onboardData[3]}</li>
                <li><strong>Q:</strong> Is there any user qualification for participation?<br><strong>A:</strong> ${onboardData[4]}</li>
                <li><strong>Q:</strong> How are users ranked on the site?<br><strong>A:</strong> ${onboardData[5]}</li>
                <li><strong>Q:</strong> What actions are allowed on the website?<br><strong>A:</strong> ${onboardData[6]}</li>
            </ol>
            
            <h5>Discussions Features Questions:</h5>
            <ol class="qa-list">
                <li><strong>Q:</strong> What are the most quoted topics on the site?<br><strong>A:</strong> ${discussionsData[1]}</li>
                <li><strong>Q:</strong> What is the experience level of the site's users?<br><strong>A:</strong> ${discussionsData[2]}</li>
                <li><strong>Q:</strong> What is the tone of discussions on the site?<br><strong>A:</strong> ${discussionsData[3]}</li>
                <li><strong>Q:</strong> What is the quality level of the answers?<br><strong>A:</strong> ${discussionsData[4]}</li>
                <li><strong>Q:</strong> What is the profile of the users of this site?<br><strong>A:</strong> ${discussionsData[5]}</li>
                <li><strong>Q:</strong> What are the most quoted languages on the site?<br><strong>A:</strong> ${discussionsData[6]}</li>
                <li><strong>Q:</strong> What are the most quoted frameworks on the site?<br><strong>A:</strong> ${discussionsData[7]}</li>
            </ol>
        </div>
    `;
}

// Setup event listeners
function setupEventListeners() {
    // Topic buttons
    topicButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const topic = e.target.dataset.topic;
            loadTopicContent(topic);
            updateActiveButton(topicButtons, e.target);
        });
    });
    
    // Comparison buttons
    comparisonButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            if (category === 'dashboard') {
                loadDashboard();
            } else {
                loadComparisonContent(category);
            }
            updateActiveButton(comparisonButtons, e.target);
        });
    });
    
    // Export buttons
    exportButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const format = e.target.dataset.format;
            exportData(format);
        });
    });
}

// Load topic content
function loadTopicContent(topic) {
    const data = researchBackgroundData[topic];
    if (!data) return;
    
    topicContent.innerHTML = `
        <div class="feature-description">
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            
            <h4>Features:</h4>
            ${data.features.map(feature => `
                <div style="margin-bottom: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 6px;">
                    <strong>${feature.name}:</strong> ${feature.description}
                </div>
            `).join('')}
            
            <h4>Evaluation Questions:</h4>
            <ol style="margin-left: 1rem;">
                ${data.questions.map(question => `<li style="margin-bottom: 0.5rem;">${question}</li>`).join('')}
            </ol>
        </div>
    `;
}

// Load dashboard with consolidated information
function loadDashboard() {
    currentCategory = 'dashboard';
    
    // Calculate statistics
    const totalSites = sitesData.length;
    const sitesWithAPI = comparisonData.connection.rows.filter(row => row[1] === 'yes').length;
    const sitesWithApps = comparisonData.connection.rows.filter(row => row[4] === 'yes').length;
    
    // Platform distribution
    const platformCount = {};
    comparisonData.basic.rows.forEach(row => {
        const platform = row[1];
        platformCount[platform] = (platformCount[platform] || 0) + 1;
    });
    
    // Average statistics
    const dailyAudiences = comparisonData.statistical.rows.map(row => parseInt(row[1]) || 0);
    const avgDailyAudience = Math.round(dailyAudiences.reduce((a, b) => a + b, 0) / dailyAudiences.length);
    
    // Most common languages
    const languageCount = {};
    comparisonData.discussions.rows.forEach(row => {
        const languages = row[6].split(', ');
        languages.forEach(lang => {
            if (lang !== 'None') {
                languageCount[lang] = (languageCount[lang] || 0) + 1;
            }
        });
    });
    
    const topLanguages = Object.entries(languageCount)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([lang]) => lang);
    
    comparisonContent.innerHTML = `
        <h3>📊 Consolidated Dashboard - Gray Literature Catalog Overview</h3>
        <p>This dashboard provides a consolidated view of all analyzed software engineering sites and their characteristics.</p>
        
        <div class="dashboard-container">
            <div class="dashboard-card">
                <h3>📈 Site Statistics</h3>
                <div class="stat-item">
                    <span class="stat-label">Total Sites Analyzed:</span>
                    <span class="stat-value">${totalSites}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Sites with API:</span>
                    <span class="stat-value">${sitesWithAPI} (${Math.round(sitesWithAPI/totalSites*100)}%)</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Sites with Mobile Apps:</span>
                    <span class="stat-value">${sitesWithApps} (${Math.round(sitesWithApps/totalSites*100)}%)</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Average Daily Audience:</span>
                    <span class="stat-value">${avgDailyAudience.toLocaleString()}</span>
                </div>
            </div>
            
            <div class="dashboard-card">
                <h3>🏢 Platform Distribution</h3>
                ${Object.entries(platformCount).map(([platform, count]) => `
                    <div class="stat-item">
                        <span class="stat-label">${platform}:</span>
                        <span class="stat-value">${count} sites</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="dashboard-card">
                <h3>💻 Most Popular Languages</h3>
                ${topLanguages.map((lang, index) => `
                    <div class="stat-item">
                        <span class="stat-label">#${index + 1} ${lang}:</span>
                        <span class="stat-value">${languageCount[lang]} sites</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="dashboard-card">
                <h3>📋 Research Categories</h3>
                <div class="stat-item">
                    <span class="stat-label">Basic Features:</span>
                    <span class="stat-value">${researchBackgroundData.basic.features.length} features</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Connection Features:</span>
                    <span class="stat-value">${researchBackgroundData.connection.features.length} features</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Statistical Features:</span>
                    <span class="stat-value">${researchBackgroundData.statistical.features.length} features</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">On Board Features:</span>
                    <span class="stat-value">${researchBackgroundData.onboard.features.length} features</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Discussion Features:</span>
                    <span class="stat-value">${researchBackgroundData.discussions.features.length} features</span>
                </div>
            </div>
            
            <div class="dashboard-card">
                <h3>🎯 Key Insights</h3>
                <div style="padding: 1rem; background: #f8f9fa; border-radius: 6px; margin-bottom: 1rem;">
                    <strong>Most Active Platform:</strong> ${Object.entries(platformCount).sort(([,a], [,b]) => b - a)[0][0]} 
                    (${Object.entries(platformCount).sort(([,a], [,b]) => b - a)[0][1]} sites)
                </div>
                <div style="padding: 1rem; background: #f8f9fa; border-radius: 6px; margin-bottom: 1rem;">
                    <strong>API Availability:</strong> ${Math.round(sitesWithAPI/totalSites*100)}% of sites provide APIs for data access
                </div>
                <div style="padding: 1rem; background: #f8f9fa; border-radius: 6px;">
                    <strong>Mobile Presence:</strong> ${Math.round(sitesWithApps/totalSites*100)}% of sites have mobile applications
                </div>
            </div>
            
            <div class="dashboard-card">
                <h3>📊 Data Export Options</h3>
                <div style="margin-bottom: 1rem;">
                    <p>Export the complete catalog data in your preferred format:</p>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    <button class="filter-btn export-btn" data-format="html" style="background: #dc3545; color: white;">HTML Report</button>
                    <button class="filter-btn export-btn" data-format="json" style="background: #fd7e14; color: white;">JSON Schema</button>
                    <button class="filter-btn export-btn" data-format="csv" style="background: #198754; color: white;">CSV Data</button>
                    <button class="filter-btn export-btn" data-format="python" style="background: #0d6efd; color: white;">Python Script</button>
                </div>
            </div>
        </div>
    `;
    
    // Re-attach export event listeners for dashboard buttons
    const dashboardExportButtons = comparisonContent.querySelectorAll('.export-btn');
    dashboardExportButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const format = e.target.dataset.format;
            exportData(format);
        });
    });
}

// Load comparison content with filtering
function loadComparisonContent(category) {
    currentCategory = category;
    const data = comparisonData[category];
    if (!data) return;
    
    currentTableData = data;
    
    const filtersHtml = createFilterInterface(data.headers);
    const tableHtml = createComparisonTable(data);
    
    comparisonContent.innerHTML = `
        <h3>${researchBackgroundData[category].title} - Site Comparison</h3>
        <p>This table shows how different sites compare across the ${researchBackgroundData[category].title.toLowerCase()} category. Use the filters below to search and filter the data:</p>
        
        ${filtersHtml}
        
        <div class="table-container">
            ${tableHtml}
        </div>
    `;
    
    setupFilterListeners();
}

// Create filter interface
function createFilterInterface(headers) {
    return `
        <div class="filter-container">
            <div class="filter-row">
                <div class="filter-group">
                    <label for="search-filter">Search in table:</label>
                    <input type="text" id="search-filter" placeholder="Enter search term...">
                </div>
                <div class="filter-group">
                    <label for="column-filter">Filter by column:</label>
                    <select id="column-filter">
                        <option value="">All columns</option>
                        ${headers.map((header, index) => `<option value="${index}">${header}</option>`).join('')}
                    </select>
                </div>
                <div class="filter-actions">
                    <button class="filter-btn clear-filter-btn" id="clear-filters">Clear Filters</button>
                </div>
            </div>
        </div>
    `;
}

// Create comparison table
function createComparisonTable(data) {
    return `
        <table class="comparison-table" id="comparison-table">
            <thead>
                <tr>
                    ${data.headers.map(header => `<th>${header}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${data.rows.map(row => `
                    <tr>
                        ${row.map(cell => `<td>${cell}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Setup filter listeners
function setupFilterListeners() {
    const searchFilter = document.getElementById('search-filter');
    const columnFilter = document.getElementById('column-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    
    if (searchFilter) {
        searchFilter.addEventListener('input', applyFilters);
    }
    
    if (columnFilter) {
        columnFilter.addEventListener('change', applyFilters);
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }
}

// Apply filters to the table
function applyFilters() {
    const searchTerm = document.getElementById('search-filter')?.value.toLowerCase() || '';
    const columnIndex = document.getElementById('column-filter')?.value || '';
    const table = document.getElementById('comparison-table');
    
    if (!table || !currentTableData) return;
    
    const tbody = table.querySelector('tbody');
    const filteredRows = currentTableData.rows.filter(row => {
        if (columnIndex !== '') {
            // Filter specific column
            const cellValue = row[parseInt(columnIndex)].toLowerCase();
            return cellValue.includes(searchTerm);
        } else {
            // Search all columns
            return row.some(cell => cell.toLowerCase().includes(searchTerm));
        }
    });
    
    // Update table body
    tbody.innerHTML = filteredRows.map(row => `
        <tr>
            ${row.map(cell => `<td>${cell}</td>`).join('')}
        </tr>
    `).join('');
    
    // Show result count
    const resultCount = filteredRows.length;
    const totalCount = currentTableData.rows.length;
    
    // Update or create result info
    let resultInfo = document.querySelector('.filter-result-info');
    if (!resultInfo) {
        resultInfo = document.createElement('div');
        resultInfo.className = 'filter-result-info';
        resultInfo.style.marginBottom = '1rem';
        resultInfo.style.fontStyle = 'italic';
        resultInfo.style.color = '#666';
        
        const tableContainer = document.querySelector('.table-container');
        tableContainer.insertBefore(resultInfo, table);
    }
    
    resultInfo.textContent = `Showing ${resultCount} of ${totalCount} sites`;
}

// Clear all filters
function clearFilters() {
    const searchFilter = document.getElementById('search-filter');
    const columnFilter = document.getElementById('column-filter');
    
    if (searchFilter) searchFilter.value = '';
    if (columnFilter) columnFilter.value = '';
    
    // Remove result info
    const resultInfo = document.querySelector('.filter-result-info');
    if (resultInfo) resultInfo.remove();
    
    // Reload the original table
    if (currentCategory && currentCategory !== 'dashboard') {
        loadComparisonContent(currentCategory);
    }
}

// Update active button
function updateActiveButton(buttons, activeButton) {
    buttons.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
}

// Export data functionality (enhanced)
function exportData(format) {
    let content = '';
    let filename = '';
    let mimeType = '';
    
    switch (format) {
        case 'html':
            content = generateHTMLExport();
            filename = 'gray-literature-catalog.html';
            mimeType = 'text/html';
            break;
        case 'json':
            content = generateJSONExport();
            filename = 'gray-literature-catalog.json';
            mimeType = 'application/json';
            break;
        case 'csv':
            content = generateCSVExport();
            filename = 'gray-literature-catalog.csv';
            mimeType = 'text/csv';
            break;
        case 'python':
            content = generatePythonExport();
            filename = 'gray-literature-catalog.py';
            mimeType = 'text/x-python';
            break;
    }
    
    // Create and trigger download
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Generate HTML export (enhanced)
function generateHTMLExport() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gray Literature Catalog - Complete Export</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        h1 { color: #333; border-bottom: 3px solid #667eea; padding-bottom: 10px; }
        h2 { color: #4a5568; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; margin-top: 2rem; }
        h3 { color: #2d3748; margin-top: 1.5rem; }
        table { border-collapse: collapse; width: 100%; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #667eea; color: white; font-weight: 500; }
        tr:nth-child(even) { background-color: #f8f9fa; }
        .stats { background: #f8f9fa; padding: 1rem; border-radius: 8px; margin: 1rem 0; }
        .site-link { color: #667eea; text-decoration: none; }
        .site-link:hover { text-decoration: underline; }
        .category { margin-bottom: 2rem; }
        .feature { background: #ffffff; padding: 1rem; margin: 0.5rem 0; border-left: 4px solid #667eea; }
        .site-description { background: #ffffff; padding: 1.5rem; margin: 1rem 0; border-radius: 8px; border: 1px solid #e2e8f0; }
        .site-description h4 { color: #2d3748; margin-bottom: 1rem; }
        .site-info { display: grid; gap: 0.5rem; margin-bottom: 1rem; }
        .site-info > div { padding: 0.5rem; background: #f8f9fa; border-radius: 4px; }
    </style>
</head>
<body>
    <h1>Gray Literature Catalog - Complete Data Export</h1>
    
    <div class="stats">
        <h2>📊 Summary Statistics</h2>
        <p><strong>Total Sites Analyzed:</strong> ${sitesData.length}</p>
        <p><strong>Research Categories:</strong> ${Object.keys(researchBackgroundData).length}</p>
        <p><strong>Total Features Analyzed:</strong> ${Object.values(researchBackgroundData).reduce((sum, cat) => sum + cat.features.length, 0)}</p>
        <p><strong>Export Date:</strong> ${new Date().toLocaleString()}</p>
    </div>
    
    <h2>🌐 Complete Sites List with Descriptions (${sitesData.length} sites)</h2>
    ${sitesData.map(site => {
        const siteInfo = siteDescriptions[site];
        return `
            <div class="site-description">
                <h4>${siteInfo.name}</h4>
                <div class="site-info">
                    <div><strong>Purpose:</strong> ${siteInfo.purpose}</div>
                    <div><strong>Content:</strong> ${siteInfo.content}</div>
                    <div><strong>Target Audience:</strong> ${siteInfo.targetAudience}</div>
                    <div><strong>URL:</strong> <a href="${siteInfo.url}" class="site-link" target="_blank">${siteInfo.url}</a></div>
                </div>
            </div>
        `;
    }).join('')}
    
    <h2>🔬 Research Categories and Features</h2>
    ${Object.entries(researchBackgroundData).map(([key, category]) => `
        <div class="category">
            <h3>${category.title}</h3>
            <p>${category.description}</p>
            
            <h4>Features (${category.features.length}):</h4>
            ${category.features.map(feature => `
                <div class="feature">
                    <strong>${feature.name}:</strong> ${feature.description}
                </div>
            `).join('')}
            
            <h4>Evaluation Questions (${category.questions.length}):</h4>
            <ol>
                ${category.questions.map(question => `<li>${question}</li>`).join('')}
            </ol>
        </div>
    `).join('')}
    
    <h2>📊 Site Comparison Data</h2>
    ${Object.entries(comparisonData).map(([category, data]) => `
        <h3>${researchBackgroundData[category].title}</h3>
        <table>
            <tr>${data.headers.map(header => `<th>${header}</th>`).join('')}</tr>
            ${data.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
        </table>
    `).join('')}
    
    <footer style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e2e8f0; text-align: center; color: #666;">
        <p>🤖 Generated with <a href="https://claude.ai/code" target="_blank" class="site-link">Claude Code</a></p>
        <p>Gray Literature Catalog - Software Engineering Research</p>
    </footer>
</body>
</html>`;
}

// Generate JSON export (enhanced)
function generateJSONExport() {
    const exportData = {
        metadata: {
            title: "Gray Literature Catalog - Software Engineering Sites",
            description: "Comprehensive catalog of gray literature sources in software engineering",
            totalSites: sitesData.length,
            totalCategories: Object.keys(researchBackgroundData).length,
            totalFeatures: Object.values(researchBackgroundData).reduce((sum, cat) => sum + cat.features.length, 0),
            generatedAt: new Date().toISOString(),
            generatedWith: "Claude Code (claude.ai/code)"
        },
        sites: sitesData.map(site => {
            const siteInfo = siteDescriptions[site];
            return {
                originalUrl: site,
                name: siteInfo.name,
                purpose: siteInfo.purpose,
                content: siteInfo.content,
                targetAudience: siteInfo.targetAudience,
                url: siteInfo.url,
                displayName: site.startsWith('http') ? site.replace(/^https?:\/\//, '') : site
            };
        }),
        siteDescriptions: siteDescriptions,
        researchFramework: researchBackgroundData,
        siteComparisons: comparisonData,
        statistics: {
            sitesWithAPI: comparisonData.connection.rows.filter(row => row[1] === 'yes').length,
            sitesWithApps: comparisonData.connection.rows.filter(row => row[4] === 'yes').length,
            platformDistribution: comparisonData.basic.rows.reduce((acc, row) => {
                const platform = row[1];
                acc[platform] = (acc[platform] || 0) + 1;
                return acc;
            }, {})
        }
    };
    
    return JSON.stringify(exportData, null, 2);
}

// Generate CSV export (enhanced)
function generateCSVExport() {
    let csv = 'Gray Literature Catalog - Complete Data Export\n';
    csv += `Generated on: ${new Date().toLocaleString()}\n`;
    csv += `Total Sites: ${sitesData.length}\n\n`;
    
    // Sites list with descriptions
    csv += 'SITES LIST WITH DESCRIPTIONS\n';
    csv += 'Name,Purpose,Content,Target Audience,URL\n';
    sitesData.forEach(site => {
        const siteInfo = siteDescriptions[site];
        csv += `"${siteInfo.name}","${siteInfo.purpose.replace(/"/g, '""')}","${siteInfo.content.replace(/"/g, '""')}","${siteInfo.targetAudience.replace(/"/g, '""')}","${siteInfo.url}"\n`;
    });
    
    // Research categories
    csv += '\n\nRESEARCH CATEGORIES\n';
    csv += 'Category,Feature Name,Feature Description\n';
    Object.entries(researchBackgroundData).forEach(([categoryKey, category]) => {
        category.features.forEach(feature => {
            csv += `"${category.title}","${feature.name}","${feature.description.replace(/"/g, '""')}"\n`;
        });
    });
    
    // Comparison data for each category
    Object.entries(comparisonData).forEach(([categoryKey, data]) => {
        csv += `\n\n${researchBackgroundData[categoryKey].title.toUpperCase()} COMPARISON\n`;
        csv += data.headers.map(h => `"${h}"`).join(',') + '\n';
        data.rows.forEach(row => {
            csv += row.map(cell => `"${cell}"`).join(',') + '\n';
        });
    });
    
    return csv;
}

// Generate Python export (enhanced)
function generatePythonExport() {
    return `#!/usr/bin/env python3
"""
Gray Literature Catalog - Complete Data Export
Generated with Claude Code
Date: ${new Date().toLocaleString()}
Total Sites: ${sitesData.length}
"""

import json
from datetime import datetime

# Metadata
CATALOG_METADATA = {
    "title": "Gray Literature Catalog - Software Engineering Sites",
    "description": "Comprehensive catalog of gray literature sources in software engineering",
    "total_sites": ${sitesData.length},
    "total_categories": ${Object.keys(researchBackgroundData).length},
    "export_date": "${new Date().toISOString()}",
    "generated_with": "Claude Code"
}

# Sites data with descriptions
SITES_DATA = [
${sitesData.map(site => {
    const siteInfo = siteDescriptions[site];
    return `    {
        "original": "${site}",
        "name": "${siteInfo.name}",
        "purpose": "${siteInfo.purpose.replace(/"/g, '\\"')}",
        "content": "${siteInfo.content.replace(/"/g, '\\"')}",
        "target_audience": "${siteInfo.targetAudience.replace(/"/g, '\\"')}",
        "url": "${siteInfo.url}",
        "display_name": "${site.startsWith('http') ? site.replace(/^https?:\/\//, '') : site}"
    },`;
}).join('\n')}
]

# Site descriptions
SITE_DESCRIPTIONS = ${JSON.stringify(siteDescriptions, null, 4)}

# Research framework
RESEARCH_FRAMEWORK = ${JSON.stringify(researchBackgroundData, null, 4)}

# Site comparison data
SITE_COMPARISONS = ${JSON.stringify(comparisonData, null, 4)}

def get_sites():
    """Return the list of gray literature sites with descriptions."""
    return SITES_DATA

def get_site_descriptions():
    """Return site descriptions dictionary."""
    return SITE_DESCRIPTIONS

def get_research_categories():
    """Return the research categories and their features."""
    return RESEARCH_FRAMEWORK

def get_comparison_data():
    """Return the site comparison data."""
    return SITE_COMPARISONS

def get_sites_by_platform(platform):
    """Get sites filtered by platform."""
    basic_data = SITE_COMPARISONS['basic']['rows']
    return [row[0] for row in basic_data if row[1].lower() == platform.lower()]

def get_sites_with_feature(category, feature_column, value):
    """Get sites with specific feature value."""
    if category not in SITE_COMPARISONS:
        return []
    
    data = SITE_COMPARISONS[category]['rows']
    return [row[0] for row in data if row[feature_column].lower() == value.lower()]

def get_site_info(site_url):
    """Get detailed information about a specific site."""
    # Find site in descriptions
    site_key = None
    for key in SITE_DESCRIPTIONS:
        if key == site_url or SITE_DESCRIPTIONS[key]['url'] == site_url:
            site_key = key
            break
    
    if not site_key:
        return None
    
    site_info = SITE_DESCRIPTIONS[site_key].copy()
    
    # Add comparison data
    site_name = site_url.replace('https://', '').replace('http://', '')
    for category, data in SITE_COMPARISONS.items():
        for row in data['rows']:
            if row[0] == site_name:
                site_info[f'{category}_features'] = dict(zip(data['headers'][1:], row[1:]))
                break
    
    return site_info

def generate_statistics():
    """Generate summary statistics."""
    stats = {
        "total_sites": len(SITES_DATA),
        "sites_with_api": len(get_sites_with_feature('connection', 1, 'yes')),
        "sites_with_apps": len(get_sites_with_feature('connection', 4, 'yes')),
        "platform_distribution": {},
        "audience_types": {},
        "website_types": {}
    }
    
    # Platform distribution
    for row in SITE_COMPARISONS['basic']['rows']:
        platform = row[1]
        stats["platform_distribution"][platform] = stats["platform_distribution"].get(platform, 0) + 1
    
    # Audience types
    for row in SITE_COMPARISONS['basic']['rows']:
        audiences = row[6].split(', ')
        for audience in audiences:
            stats["audience_types"][audience] = stats["audience_types"].get(audience, 0) + 1
    
    # Website types
    for row in SITE_COMPARISONS['basic']['rows']:
        website_type = row[7]
        stats["website_types"][website_type] = stats["website_types"].get(website_type, 0) + 1
    
    return stats

def export_to_json(filename="gray_literature_catalog.json"):
    """Export all data to JSON file."""
    export_data = {
        "metadata": CATALOG_METADATA,
        "sites": SITES_DATA,
        "site_descriptions": SITE_DESCRIPTIONS,
        "research_framework": RESEARCH_FRAMEWORK,
        "site_comparisons": SITE_COMPARISONS,
        "statistics": generate_statistics()
    }
    
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(export_data, f, indent=2, ensure_ascii=False)
    
    print(f"Data exported to {filename}")

def print_summary():
    """Print a comprehensive summary of the catalog data."""
    print("=" * 60)
    print("GRAY LITERATURE CATALOG SUMMARY")
    print("=" * 60)
    
    stats = generate_statistics()
    
    print(f"Total sites analyzed: {stats['total_sites']}")
    print(f"Sites with API: {stats['sites_with_api']} ({stats['sites_with_api']/stats['total_sites']*100:.1f}%)")
    print(f"Sites with mobile apps: {stats['sites_with_apps']} ({stats['sites_with_apps']/stats['total_sites']*100:.1f}%)")
    
    print("\\nPlatform Distribution:")
    for platform, count in sorted(stats['platform_distribution'].items(), key=lambda x: x[1], reverse=True):
        print(f"  {platform}: {count} sites")
    
    print("\\nWebsite Types:")
    for website_type, count in sorted(stats['website_types'].items(), key=lambda x: x[1], reverse=True):
        print(f"  {website_type}: {count} sites")
    
    print("\\nResearch Categories:")
    for category_key, category_data in RESEARCH_FRAMEWORK.items():
        print(f"  {category_data['title']}: {len(category_data['features'])} features")
    
    print("\\nTop 10 Sites by Daily Audience:")
    statistical_data = sorted(SITE_COMPARISONS['statistical']['rows'], 
                            key=lambda x: int(x[1]) if x[1].isdigit() else 0, 
                            reverse=True)[:10]
    for i, row in enumerate(statistical_data, 1):
        print(f"  {i:2d}. {row[0]}: {int(row[1]):,} daily users")

def search_sites(query, category=None):
    """Search sites by name or features."""
    query = query.lower()
    results = []
    
    # Search in site names and descriptions
    for site in SITES_DATA:
        if (query in site['name'].lower() or 
            query in site['purpose'].lower() or 
            query in site['content'].lower()):
            results.append(('description', site['name'], site['purpose']))
    
    # Search in comparison data
    if category and category in SITE_COMPARISONS:
        data = SITE_COMPARISONS[category]
        for row in data['rows']:
            for i, cell in enumerate(row):
                if query in cell.lower():
                    results.append((f"{category}_{data['headers'][i]}", row[0], cell))
    
    return results

def print_site_details(site_name):
    """Print detailed information about a specific site."""
    site_info = None
    for site in SITES_DATA:
        if site['name'].lower() == site_name.lower():
            site_info = site
            break
    
    if not site_info:
        print(f"Site '{site_name}' not found")
        return
    
    print(f"\\n{'=' * 60}")
    print(f"SITE DETAILS: {site_info['name']}")
    print(f"{'=' * 60}")
    print(f"Purpose: {site_info['purpose']}")
    print(f"Content: {site_info['content']}")
    print(f"Target Audience: {site_info['target_audience']}")
    print(f"URL: {site_info['url']}")
    
    # Get comparison data
    site_url = site_info['display_name']
    for category, data in SITE_COMPARISONS.items():
        for row in data['rows']:
            if row[0] == site_url:
                print(f"\\n{RESEARCH_FRAMEWORK[category]['title']}:")
                for i, header in enumerate(data['headers'][1:], 1):
                    print(f"  {header}: {row[i]}")
                break

if __name__ == "__main__":
    print_summary()
    
    # Example usage
    print("\\n" + "=" * 60)
    print("EXAMPLE QUERIES")
    print("=" * 60)
    
    print("\\nStack Exchange sites:")
    stack_sites = get_sites_by_platform('stack exchange')
    for site in stack_sites:
        print(f"  - {site}")
    
    print("\\nSites with APIs:")
    api_sites = get_sites_with_feature('connection', 1, 'yes')
    print(f"  Found {len(api_sites)} sites with APIs")
    
    print("\\nSearch for 'python':")
    python_results = search_sites('python', 'discussions')
    for result_type, site, context in python_results[:5]:
        print(f"  {site}: {context}")
    
    # Example site details
    print("\\nExample site details:")
    print_site_details("Stack Overflow")
`;
}

// Initialize loading messages
topicContent.innerHTML = '<div class="loading">Select a topic above to view detailed information</div>';
comparisonContent.innerHTML = '<div class="loading">Select a feature category above to view site comparisons, or click the Dashboard for an overview</div>';

console.log('Enhanced Gray Literature Catalog initialized successfully!');
console.log(`Loaded ${sitesData.length} sites across ${Object.keys(researchBackgroundData).length} research categories`);
console.log('New features: Advanced filtering, complete dataset, consolidated dashboard');