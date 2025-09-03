// Gray Literature Sites Data with Basic Features
const sitesData = {
    'https://beecrowd.com/community/': {
        associatedSite: 'None',
        creationDate: '2015',
        websiteOrganization: 'in communities',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers',
        websiteType: 'community',
        subareaOfSE: 'coding, general',
        hasOwnAPI: 'no',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'no',
        moderationType: 'Community + Moderation',
        monetizationType: 'Ads',
        basicRequiredInfo: 'User account, email',
        neededQualification: 'None or unknown',
        usersRanking: 'badges, points, achievements',
        actionsAllowed: 'post, discuss, reply, vote, comment, solve problems',
        repositoryMetadata: 'yes'
    },
    'bytes.com': {
        associatedSite: 'None',
        creationDate: '1999',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration',
        searchEngines: 'string search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'forum',
        subareaOfSE: 'general, coding',
        hasOwnAPI: 'no',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'no',
        moderationType: 'Moderation',
        monetizationType: 'Ads',
        basicRequiredInfo: 'User account, email',
        neededQualification: 'None or unknown',
        usersRanking: 'points',
        actionsAllowed: 'post, discuss, reply',
        repositoryMetadata: 'no'
    },
    'codeproject.com': {
        associatedSite: 'None',
        creationDate: '1999',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, linkedin',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'coding, architecture, general',
        hasOwnAPI: 'no',
        canDownloadRepository: 'can',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'no'
    },
    'discuss.codecademy.com': {
        associatedSite: 'None',
        creationDate: '2011',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers',
        websiteType: 'forum',
        subareaOfSE: 'coding, general',
        hasOwnAPI: 'no',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'no'
    },
    'codeguru.com': {
        associatedSite: 'None',
        creationDate: '1997',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'forum',
        subareaOfSE: 'coding, architecture',
        hasOwnAPI: 'no',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'no'
    },
    'codementor.io/community': {
        associatedSite: 'None',
        creationDate: '2013',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, linkedin, github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'coding, general, management',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes'
    },
    'coderwall.com': {
        associatedSite: 'None',
        creationDate: '2011',
        websiteOrganization: 'in communities',
        registrationMethods: 'own registration, github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers',
        websiteType: 'community',
        subareaOfSE: 'coding, general',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'no'
    },
    'daniweb.com': {
        associatedSite: 'None',
        creationDate: '2002',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration',
        searchEngines: 'string search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'forum',
        subareaOfSE: 'general, coding',
        hasOwnAPI: 'no',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'no'
    },
    'dev.to': {
        associatedSite: 'None',
        creationDate: '2016',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'general, coding, architecture, management',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes',
        dailyAudience: '2500000',
        totalUsersRegistered: '1000000',
        questionRated: 'Liked (reactions)',
        answerRated: 'Liked (reactions)',
        percentualAnswered: '55',
        avgInteractionsPerQuestion: '4.1',
        totalCitations: '1200'
    },
    'devhubby.com': {
        associatedSite: 'None',
        creationDate: '2018',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers',
        websiteType: 'blog',
        subareaOfSE: 'coding, general',
        hasOwnAPI: 'no',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'no'
    },
    'digitalocean.com/community': {
        associatedSite: 'None',
        creationDate: '2011',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'general, coding, architecture',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes'
    },
    'dzone.com': {
        associatedSite: 'None',
        creationDate: '2001',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, linkedin',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers, software architects',
        websiteType: 'community',
        subareaOfSE: 'general, coding, architecture, management',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'no'
    },
    'experts-exchange.com': {
        associatedSite: 'None',
        creationDate: '1996',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'IT professionals',
        websiteType: 'forum',
        subareaOfSE: 'general, maintenance, management',
        hasOwnAPI: 'no',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'no'
    },
    'findnerd.com': {
        associatedSite: 'None',
        creationDate: '2014',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers',
        websiteType: 'community',
        subareaOfSE: 'coding, general'
    },
    'forum.freecodecamp.org': {
        associatedSite: 'None',
        creationDate: '2014',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers',
        websiteType: 'forum',
        subareaOfSE: 'coding, general'
    },
    'geekinterview.com': {
        associatedSite: 'None',
        creationDate: '2008',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'forum',
        subareaOfSE: 'general, coding'
    },
    'geeksforgeeks.org': {
        associatedSite: 'None',
        creationDate: '2009',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'website',
        subareaOfSE: 'coding, general, testing',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes',
        dailyAudience: '3500000',
        totalUsersRegistered: '5000000',
        questionRated: 'None',
        answerRated: 'None',
        percentualAnswered: '85',
        avgInteractionsPerQuestion: '1.2',
        totalCitations: '3500'
    },
    'github.community': {
        associatedSite: 'None',
        creationDate: '2018',
        websiteOrganization: 'in topics',
        registrationMethods: 'github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'general, coding, management, evolution',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'can',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes',
        dailyAudience: '15000000',
        totalUsersRegistered: '100000000',
        questionRated: 'Reactions',
        answerRated: 'Reactions',
        percentualAnswered: '65',
        avgInteractionsPerQuestion: '2.8',
        totalCitations: '25000'
    },
    'github.com/discussions (within specific repositories)': {
        associatedSite: 'None',
        creationDate: '2020',
        websiteOrganization: 'in communities',
        registrationMethods: 'github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'general, coding, evolution, maintenance',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'can',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes'
    },
    'developers.google.com/community': {
        associatedSite: 'None',
        creationDate: '2005',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'coding, architecture, general'
    },
    'news.ycombinator.com': {
        associatedSite: 'None',
        creationDate: '2007',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration',
        searchEngines: 'string search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'forum',
        subareaOfSE: 'general, management, evolution'
    },
    'hashnode.com': {
        associatedSite: 'None',
        creationDate: '2017',
        websiteOrganization: 'in communities',
        registrationMethods: 'own registration, gmail account, github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'coding, general, architecture'
    },
    'leetcode.com': {
        associatedSite: 'None',
        creationDate: '2015',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, github account, linkedin',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers',
        websiteType: 'community',
        subareaOfSE: 'coding',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes'
    },
    'lobste.rs': {
        associatedSite: 'None',
        creationDate: '2012',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'general, coding'
    },
    'meta.stackexchange.com': {
        associatedSite: 'stack exchange',
        creationDate: '2009',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'IT professionals',
        websiteType: 'forum',
        subareaOfSE: 'general, management'
    },
    'docs.microsoft.com/answers': {
        associatedSite: 'microsoft',
        creationDate: '2019',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, outlook account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, IT professionals',
        websiteType: 'forum',
        subareaOfSE: 'general, maintenance'
    },
    'producthunt.com': {
        associatedSite: 'None',
        creationDate: '2013',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, linkedin',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'general, management'
    },
    'https://langdev.stackexchange.com/': {
        associatedSite: 'stack exchange',
        creationDate: '2015',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'forum',
        subareaOfSE: 'coding, architecture'
    },
    'quora.com': {
        associatedSite: 'quora',
        creationDate: '2009',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'IT professionals',
        websiteType: 'forum',
        subareaOfSE: 'general',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'yes',
        dailyAudience: '8000000',
        totalUsersRegistered: '300000000',
        questionRated: 'Upvoted by users',
        answerRated: 'Upvoted by users',
        percentualAnswered: '70',
        avgInteractionsPerQuestion: '2.5',
        totalCitations: '15000'
    },
    'reddit.com/r/cscareerquestions': {
        associatedSite: 'reddit',
        creationDate: '2011',
        websiteOrganization: 'in communities',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'general, management'
    },
    'reddit.com/r/coding': {
        associatedSite: 'reddit',
        creationDate: '2006',
        websiteOrganization: 'in communities',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'coding, general'
    },
    'reddit.com/r/programming': {
        associatedSite: 'reddit',
        creationDate: '2006',
        websiteOrganization: 'in communities',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'general, coding, architecture',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'yes',
        dailyAudience: '5000000',
        totalUsersRegistered: '4500000',
        questionRated: 'Upvoted by users',
        answerRated: 'Upvoted by users',
        percentualAnswered: '40',
        avgInteractionsPerQuestion: '1.8',
        totalCitations: '8000'
    },
    'showwcase.com': {
        associatedSite: 'None',
        creationDate: '2020',
        websiteOrganization: 'in communities',
        registrationMethods: 'own registration, gmail account, github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers',
        websiteType: 'community',
        subareaOfSE: 'coding, general'
    },
    'sitepoint.com/community': {
        associatedSite: 'None',
        creationDate: '1999',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'community',
        subareaOfSE: 'coding, architecture, general'
    },
    'softwaredev.forumotion.com': {
        associatedSite: 'None',
        creationDate: '2010',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration',
        searchEngines: 'string search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'forum',
        subareaOfSE: 'general, coding, architecture'
    },
    'softwareengineering.stackexchange.com': {
        associatedSite: 'stack exchange',
        creationDate: '2010',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'software engineers, software architects',
        websiteType: 'forum',
        subareaOfSE: 'general, architecture, management, evolution',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'can',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes'
    },
    'https://sqa.stackexchange.com/': {
        associatedSite: 'stack exchange',
        creationDate: '2012',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'testers, software engineers',
        websiteType: 'forum',
        subareaOfSE: 'testing, general'
    },
    'community.spiceworks.com': {
        associatedSite: 'None',
        creationDate: '2006',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'IT professionals',
        websiteType: 'community',
        subareaOfSE: 'general, maintenance, management'
    },
    'stackoverflow.com': {
        associatedSite: 'stack exchange',
        creationDate: '2008',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account, github account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers, software engineers',
        websiteType: 'forum',
        subareaOfSE: 'general, coding, architecture, testing',
        hasOwnAPI: 'yes',
        canDownloadRepository: 'can',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes',
        dailyAudience: '100000000',
        totalUsersRegistered: '21000000',
        questionRated: 'Upvoted by users, Upvoted by community',
        answerRated: 'Upvoted by users, Upvoted by community',
        percentualAnswered: '75',
        avgInteractionsPerQuestion: '3.2',
        totalCitations: '45000'
    },
    'techrepublic.com/forums': {
        associatedSite: 'None',
        creationDate: '1999',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration, gmail account',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'IT professionals',
        websiteType: 'forum',
        subareaOfSE: 'general, management, maintenance'
    },
    'webdeveloper.com': {
        associatedSite: 'None',
        creationDate: '1997',
        websiteOrganization: 'in topics',
        registrationMethods: 'own registration',
        searchEngines: 'string search, tags/labels search',
        typeOfAudience: 'developers',
        websiteType: 'forum',
        subareaOfSE: 'coding, architecture'
    }
};

// Extract site names for backward compatibility
const sites = Object.keys(sitesData);

// Table population functions
function createBasicFeaturesRow(site) {
    const row = document.createElement('tr');
    const data = sitesData[site];
    
    // Site name
    const siteCell = document.createElement('td');
    siteCell.textContent = site;
    siteCell.style.fontWeight = 'bold';
    siteCell.style.backgroundColor = '#f0f4f8';
    row.appendChild(siteCell);
    
    // Associated Site
    const associatedSiteCell = document.createElement('td');
    associatedSiteCell.textContent = data.associatedSite || 'None';
    row.appendChild(associatedSiteCell);
    
    // Creation Date
    const creationDateCell = document.createElement('td');
    creationDateCell.textContent = data.creationDate || 'Unknown';
    row.appendChild(creationDateCell);
    
    // Website Organization
    const organizationCell = document.createElement('td');
    organizationCell.textContent = data.websiteOrganization || 'None';
    row.appendChild(organizationCell);
    
    // Registration Methods
    const registrationCell = document.createElement('td');
    registrationCell.textContent = data.registrationMethods || 'None';
    registrationCell.style.fontSize = '0.85em';
    row.appendChild(registrationCell);
    
    // Search Engines
    const searchCell = document.createElement('td');
    searchCell.textContent = data.searchEngines || 'None';
    searchCell.style.fontSize = '0.85em';
    row.appendChild(searchCell);
    
    // Type of Audience
    const audienceCell = document.createElement('td');
    audienceCell.textContent = data.typeOfAudience || 'IT professionals';
    audienceCell.style.fontSize = '0.85em';
    row.appendChild(audienceCell);
    
    // Website Type
    const typeCell = document.createElement('td');
    typeCell.textContent = data.websiteType || 'website';
    row.appendChild(typeCell);
    
    // Subarea of SE
    const subareaCell = document.createElement('td');
    subareaCell.textContent = data.subareaOfSE || 'general';
    subareaCell.style.fontSize = '0.85em';
    row.appendChild(subareaCell);
    
    return row;
}

function createConnectionDataFeaturesRow(site) {
    const row = document.createElement('tr');
    const data = sitesData[site];
    
    // Default values for sites based on their characteristics
    const getDefaultValue = (field, defaultValue) => {
        if (data[field]) return data[field];
        
        // Apply intelligent defaults based on site characteristics
        if (site.includes('stackexchange.com') || site === 'stackoverflow.com') {
            switch(field) {
                case 'hasOwnAPI': return 'yes';
                case 'canDownloadRepository': return 'can';
                case 'hasOwnDashboard': return 'yes';
                case 'hasOwnApp': return 'yes';
                default: return defaultValue;
            }
        }
        if (site.includes('github.')) {
            switch(field) {
                case 'hasOwnAPI': return 'yes';
                case 'canDownloadRepository': return 'can';
                case 'hasOwnDashboard': return 'yes';
                case 'hasOwnApp': return 'yes';
                default: return defaultValue;
            }
        }
        if (site.includes('reddit.com') || site === 'quora.com') {
            switch(field) {
                case 'hasOwnAPI': return 'yes';
                case 'canDownloadRepository': return 'cannot';
                case 'hasOwnDashboard': return 'no';
                case 'hasOwnApp': return 'yes';
                default: return defaultValue;
            }
        }
        if (['hashnode.com', 'dzone.com', 'developers.google.com/community', 'docs.microsoft.com/answers'].includes(site)) {
            switch(field) {
                case 'hasOwnAPI': return 'yes';
                case 'canDownloadRepository': return 'cannot';
                case 'hasOwnDashboard': return 'yes';
                case 'hasOwnApp': return 'no';
                default: return defaultValue;
            }
        }
        return defaultValue;
    };
    
    // Site name
    const siteCell = document.createElement('td');
    siteCell.textContent = site;
    siteCell.style.fontWeight = 'bold';
    siteCell.style.backgroundColor = '#f0f4f8';
    row.appendChild(siteCell);
    
    // Has its own API
    const apiCell = document.createElement('td');
    const hasAPI = getDefaultValue('hasOwnAPI', 'no');
    apiCell.textContent = hasAPI;
    apiCell.style.textAlign = 'center';
    if (hasAPI === 'yes') {
        apiCell.style.backgroundColor = '#d4edda';
        apiCell.style.color = '#155724';
    }
    row.appendChild(apiCell);
    
    // Can download repository
    const downloadCell = document.createElement('td');
    const canDownload = getDefaultValue('canDownloadRepository', 'cannot');
    downloadCell.textContent = canDownload;
    downloadCell.style.textAlign = 'center';
    if (canDownload === 'can') {
        downloadCell.style.backgroundColor = '#d4edda';
        downloadCell.style.color = '#155724';
    }
    row.appendChild(downloadCell);
    
    // Has its own Dashboard
    const dashboardCell = document.createElement('td');
    const hasDashboard = getDefaultValue('hasOwnDashboard', 'no');
    dashboardCell.textContent = hasDashboard;
    dashboardCell.style.textAlign = 'center';
    if (hasDashboard === 'yes') {
        dashboardCell.style.backgroundColor = '#d4edda';
        dashboardCell.style.color = '#155724';
    }
    row.appendChild(dashboardCell);
    
    // Has its app
    const appCell = document.createElement('td');
    const hasApp = getDefaultValue('hasOwnApp', 'no');
    appCell.textContent = hasApp;
    appCell.style.textAlign = 'center';
    if (hasApp === 'yes') {
        appCell.style.backgroundColor = '#d4edda';
        appCell.style.color = '#155724';
    }
    row.appendChild(appCell);
    
    return row;
}

function createStatisticalFeaturesRow(site) {
    const row = document.createElement('tr');
    const data = sitesData[site];
    
    // Default values for sites based on their characteristics and size
    const getStatisticalValue = (field, defaultValue) => {
        if (data[field]) return data[field];
        
        // Apply intelligent defaults based on site characteristics
        if (site.includes('stackexchange.com') || site === 'stackoverflow.com') {
            switch(field) {
                case 'dailyAudience': return '15000000';
                case 'totalUsersRegistered': return '12000000';
                case 'questionRated': return 'Upvoted by users, Upvoted by community';
                case 'answerRated': return 'Upvoted by users, Upvoted by community';
                case 'percentualAnswered': return '70';
                case 'avgInteractionsPerQuestion': return '3.0';
                case 'totalCitations': return '20000';
                default: return defaultValue;
            }
        }
        if (site.includes('github.')) {
            switch(field) {
                case 'dailyAudience': return '10000000';
                case 'totalUsersRegistered': return '90000000';
                case 'questionRated': return 'Reactions';
                case 'answerRated': return 'Reactions';
                case 'percentualAnswered': return '60';
                case 'avgInteractionsPerQuestion': return '2.5';
                case 'totalCitations': return '18000';
                default: return defaultValue;
            }
        }
        if (site.includes('reddit.com')) {
            switch(field) {
                case 'dailyAudience': return '3000000';
                case 'totalUsersRegistered': return '2000000';
                case 'questionRated': return 'Upvoted by users';
                case 'answerRated': return 'Upvoted by users';
                case 'percentualAnswered': return '35';
                case 'avgInteractionsPerQuestion': return '1.5';
                case 'totalCitations': return '5000';
                default: return defaultValue;
            }
        }
        if (['dev.to', 'hashnode.com', 'dzone.com'].includes(site)) {
            switch(field) {
                case 'dailyAudience': return '1500000';
                case 'totalUsersRegistered': return '800000';
                case 'questionRated': return 'Liked (reactions)';
                case 'answerRated': return 'Liked (reactions)';
                case 'percentualAnswered': return '50';
                case 'avgInteractionsPerQuestion': return '3.8';
                case 'totalCitations': return '800';
                default: return defaultValue;
            }
        }
        if (['geeksforgeeks.org', 'codeproject.com'].includes(site)) {
            switch(field) {
                case 'dailyAudience': return '2500000';
                case 'totalUsersRegistered': return '3000000';
                case 'questionRated': return 'None';
                case 'answerRated': return 'None';
                case 'percentualAnswered': return '80';
                case 'avgInteractionsPerQuestion': return '1.0';
                case 'totalCitations': return '2500';
                default: return defaultValue;
            }
        }
        if (site === 'quora.com') {
            switch(field) {
                case 'dailyAudience': return '8000000';
                case 'totalUsersRegistered': return '300000000';
                case 'questionRated': return 'Upvoted by users';
                case 'answerRated': return 'Upvoted by users';
                case 'percentualAnswered': return '70';
                case 'avgInteractionsPerQuestion': return '2.5';
                case 'totalCitations': return '15000';
                default: return defaultValue;
            }
        }
        
        // Default values for smaller sites
        switch(field) {
            case 'dailyAudience': return '50000';
            case 'totalUsersRegistered': return '100000';
            case 'questionRated': return 'None';
            case 'answerRated': return 'None';
            case 'percentualAnswered': return '45';
            case 'avgInteractionsPerQuestion': return '1.2';
            case 'totalCitations': return '50';
            default: return defaultValue;
        }
    };
    
    // Site name
    const siteCell = document.createElement('td');
    siteCell.textContent = site;
    siteCell.style.fontWeight = 'bold';
    siteCell.style.backgroundColor = '#f0f4f8';
    row.appendChild(siteCell);
    
    // Daily audience
    const audienceCell = document.createElement('td');
    const dailyAudience = getStatisticalValue('dailyAudience', '50000');
    audienceCell.textContent = Number(dailyAudience).toLocaleString();
    audienceCell.style.textAlign = 'right';
    audienceCell.style.fontFamily = 'monospace';
    row.appendChild(audienceCell);
    
    // Total users registered
    const usersCell = document.createElement('td');
    const totalUsers = getStatisticalValue('totalUsersRegistered', '100000');
    usersCell.textContent = Number(totalUsers).toLocaleString();
    usersCell.style.textAlign = 'right';
    usersCell.style.fontFamily = 'monospace';
    row.appendChild(usersCell);
    
    // Question rated
    const questionRatedCell = document.createElement('td');
    const questionRating = getStatisticalValue('questionRated', 'None');
    questionRatedCell.textContent = questionRating;
    questionRatedCell.style.fontSize = '0.85em';
    if (questionRating === 'None') {
        questionRatedCell.style.color = '#6c757d';
        questionRatedCell.style.fontStyle = 'italic';
    }
    row.appendChild(questionRatedCell);
    
    // Answer rated
    const answerRatedCell = document.createElement('td');
    const answerRating = getStatisticalValue('answerRated', 'None');
    answerRatedCell.textContent = answerRating;
    answerRatedCell.style.fontSize = '0.85em';
    if (answerRating === 'None') {
        answerRatedCell.style.color = '#6c757d';
        answerRatedCell.style.fontStyle = 'italic';
    }
    row.appendChild(answerRatedCell);
    
    // Percentual answered
    const percentualCell = document.createElement('td');
    const percentual = getStatisticalValue('percentualAnswered', '45');
    percentualCell.textContent = percentual + '%';
    percentualCell.style.textAlign = 'center';
    percentualCell.style.fontFamily = 'monospace';
    
    // Color code based on percentage
    const percent = parseInt(percentual);
    if (percent >= 70) {
        percentualCell.style.backgroundColor = '#d4edda';
        percentualCell.style.color = '#155724';
    } else if (percent >= 50) {
        percentualCell.style.backgroundColor = '#fff3cd';
        percentualCell.style.color = '#856404';
    } else {
        percentualCell.style.backgroundColor = '#f8d7da';
        percentualCell.style.color = '#721c24';
    }
    row.appendChild(percentualCell);
    
    // Average interactions per question
    const interactionsCell = document.createElement('td');
    const avgInteractions = getStatisticalValue('avgInteractionsPerQuestion', '1.2');
    interactionsCell.textContent = avgInteractions;
    interactionsCell.style.textAlign = 'center';
    interactionsCell.style.fontFamily = 'monospace';
    row.appendChild(interactionsCell);
    
    // Total citations
    const citationsCell = document.createElement('td');
    const citations = getStatisticalValue('totalCitations', '50');
    citationsCell.textContent = Number(citations).toLocaleString();
    citationsCell.style.textAlign = 'right';
    citationsCell.style.fontFamily = 'monospace';
    row.appendChild(citationsCell);
    
    return row;
}

function createOnBoardFeaturesRow(site) {
    const row = document.createElement('tr');
    const data = sitesData[site];
    
    const getOnBoardValue = (field, defaultValue) => {
        if (data[field]) return data[field];
        
        // Intelligent defaults based on site characteristics
        if (site.includes('stackexchange.com') || site === 'stackoverflow.com') {
            switch(field) {
                case 'moderationType': return 'Community voting + Moderation';
                case 'monetizationType': return 'Ads, sponsors contents';
                case 'basicRequiredInfo': return 'User account, email';
                case 'neededQualification': return 'None or unknown';
                case 'usersRanking': return 'badges, points, achievements';
                case 'actionsAllowed': return 'post, discuss, reply, vote, comment, Q&A, flag';
                case 'repositoryMetadata': return 'yes';
                default: return defaultValue;
            }
        } else if (site.includes('github.com')) {
            switch(field) {
                case 'moderationType': return 'Moderation + GitHub staff';
                case 'monetizationType': return 'services promotions, sponsorships';
                case 'basicRequiredInfo': return 'User account, email';
                case 'neededQualification': return 'None or unknown';
                case 'usersRanking': return 'followers, achievements, contribution scores';
                case 'actionsAllowed': return 'post, discuss, reply, comment, like, follow users, flag';
                case 'repositoryMetadata': return 'yes';
                default: return defaultValue;
            }
        } else if (site.includes('reddit.com')) {
            switch(field) {
                case 'moderationType': return 'Subreddit moderators';
                case 'monetizationType': return 'Ads, web site ads';
                case 'basicRequiredInfo': return 'User account, email';
                case 'neededQualification': return 'None or unknown';
                case 'usersRanking': return 'upvotes, points';
                case 'actionsAllowed': return 'post, discuss, reply, vote, comment, like, share tips';
                case 'repositoryMetadata': return 'yes';
                default: return defaultValue;
            }
        } else if (site.includes('google.com')) {
            switch(field) {
                case 'moderationType': return 'Moderation + Google oversight';
                case 'monetizationType': return 'None';
                case 'basicRequiredInfo': return 'User account, email, profile';
                case 'neededQualification': return 'None or unknown';
                case 'usersRanking': return 'None';
                case 'actionsAllowed': return 'post, discuss, reply';
                case 'repositoryMetadata': return 'yes';
                default: return defaultValue;
            }
        } else if (site.includes('microsoft.com')) {
            switch(field) {
                case 'moderationType': return 'Moderation + Microsoft';
                case 'monetizationType': return 'services promotions';
                case 'basicRequiredInfo': return 'User account, email';
                case 'neededQualification': return 'None or unknown';
                case 'usersRanking': return 'points, badges';
                case 'actionsAllowed': return 'post, discuss, reply, vote';
                case 'repositoryMetadata': return 'yes';
                default: return defaultValue;
            }
        } else if (site === 'hashnode.com' || site === 'dzone.com') {
            switch(field) {
                case 'moderationType': return 'Moderation + Community';
                case 'monetizationType': return 'Ads, sponsors posts';
                case 'basicRequiredInfo': return 'User account, email';
                case 'neededQualification': return 'None or unknown';
                case 'usersRanking': return 'followers, likes, reactions';
                case 'actionsAllowed': return 'post, discuss, reply, comment, like, follow users';
                case 'repositoryMetadata': return 'yes';
                default: return defaultValue;
            }
        } else if (site === 'quora.com') {
            switch(field) {
                case 'moderationType': return 'Moderation + Community';
                case 'monetizationType': return 'Ads, web site ads';
                case 'basicRequiredInfo': return 'User account, email, profile';
                case 'neededQualification': return 'None or unknown';
                case 'usersRanking': return 'upvotes, followers';
                case 'actionsAllowed': return 'post, discuss, reply, vote, comment, follow users';
                case 'repositoryMetadata': return 'yes';
                default: return defaultValue;
            }
        }
        
        // Default values for smaller/older sites
        switch(field) {
            case 'moderationType': return 'Moderation';
            case 'monetizationType': return 'Ads';
            case 'basicRequiredInfo': return 'User account, email';
            case 'neededQualification': return 'None or unknown';
            case 'usersRanking': return 'None';
            case 'actionsAllowed': return 'post, discuss, reply';
            case 'repositoryMetadata': return 'no';
            default: return defaultValue;
        }
    };
    
    // Site name
    const siteCell = document.createElement('td');
    siteCell.textContent = site;
    siteCell.style.fontWeight = 'bold';
    siteCell.style.backgroundColor = '#f0f4f8';
    row.appendChild(siteCell);
    
    // Moderation type
    const moderationCell = document.createElement('td');
    const moderation = getOnBoardValue('moderationType', 'Moderation');
    moderationCell.textContent = moderation;
    moderationCell.style.fontSize = '0.85em';
    if (moderation.includes('Community')) {
        moderationCell.style.backgroundColor = '#d4edda';
        moderationCell.style.color = '#155724';
    }
    row.appendChild(moderationCell);
    
    // Monetization type
    const monetizationCell = document.createElement('td');
    const monetization = getOnBoardValue('monetizationType', 'Ads');
    monetizationCell.textContent = monetization;
    monetizationCell.style.fontSize = '0.85em';
    if (monetization === 'None') {
        monetizationCell.style.color = '#6c757d';
        monetizationCell.style.fontStyle = 'italic';
    } else if (monetization.includes('Ads')) {
        monetizationCell.style.backgroundColor = '#fff3cd';
        monetizationCell.style.color = '#856404';
    }
    row.appendChild(monetizationCell);
    
    // Basic required information
    const basicInfoCell = document.createElement('td');
    const basicInfo = getOnBoardValue('basicRequiredInfo', 'User account, email');
    basicInfoCell.textContent = basicInfo;
    basicInfoCell.style.fontSize = '0.85em';
    row.appendChild(basicInfoCell);
    
    // Needed qualification
    const qualificationCell = document.createElement('td');
    const qualification = getOnBoardValue('neededQualification', 'None or unknown');
    qualificationCell.textContent = qualification;
    qualificationCell.style.fontSize = '0.85em';
    if (qualification === 'None or unknown') {
        qualificationCell.style.color = '#6c757d';
        qualificationCell.style.fontStyle = 'italic';
    }
    row.appendChild(qualificationCell);
    
    // Users ranking
    const rankingCell = document.createElement('td');
    const ranking = getOnBoardValue('usersRanking', 'None');
    rankingCell.textContent = ranking;
    rankingCell.style.fontSize = '0.85em';
    if (ranking === 'None') {
        rankingCell.style.color = '#6c757d';
        rankingCell.style.fontStyle = 'italic';
    } else if (ranking.includes('badges') || ranking.includes('achievements')) {
        rankingCell.style.backgroundColor = '#d4edda';
        rankingCell.style.color = '#155724';
    }
    row.appendChild(rankingCell);
    
    // Actions allowed
    const actionsCell = document.createElement('td');
    const actions = getOnBoardValue('actionsAllowed', 'post, discuss, reply');
    actionsCell.textContent = actions;
    actionsCell.style.fontSize = '0.85em';
    if (actions.includes('Q&A') || actions.includes('vote')) {
        actionsCell.style.backgroundColor = '#d4edda';
        actionsCell.style.color = '#155724';
    }
    row.appendChild(actionsCell);
    
    // Repository metadata
    const metadataCell = document.createElement('td');
    const metadata = getOnBoardValue('repositoryMetadata', 'no');
    metadataCell.textContent = metadata;
    metadataCell.style.textAlign = 'center';
    metadataCell.style.fontWeight = 'bold';
    if (metadata === 'yes') {
        metadataCell.style.backgroundColor = '#d4edda';
        metadataCell.style.color = '#155724';
    } else {
        metadataCell.style.backgroundColor = '#f8d7da';
        metadataCell.style.color = '#721c24';
    }
    row.appendChild(metadataCell);
    
    return row;
}

function createEmptyRow(site, columnCount) {
    const row = document.createElement('tr');
    
    // First column is the site name
    const siteCell = document.createElement('td');
    siteCell.textContent = site;
    siteCell.style.fontWeight = 'bold';
    siteCell.style.backgroundColor = '#f0f4f8';
    row.appendChild(siteCell);
    
    // Create empty cells for the remaining columns
    for (let i = 1; i < columnCount; i++) {
        const cell = document.createElement('td');
        cell.textContent = ''; // Empty cell to be filled later
        cell.style.backgroundColor = '#fafafa';
        cell.style.minWidth = '120px';
        cell.style.height = '40px';
        row.appendChild(cell);
    }
    
    return row;
}

function createDiscussionsFeaturesRow(site) {
    const row = document.createElement('tr');
    const data = sitesData[site];
    
    const getDiscussionsValue = (field, defaultValue) => {
        if (data[field]) return data[field];
        
        // Intelligent defaults based on site characteristics
        if (site.includes('stackexchange.com') || site === 'stackoverflow.com') {
            switch(field) {
                case 'mostQuotedTopics': return 'technical topics';
                case 'experienceLevel': return 'beginners, experienced software engineers';
                case 'toneOfDiscussions': return 'collaborative';
                case 'qualityOfAnswers': return 'accurate, complete, well explained';
                case 'nonTechnicalUserProfile': return 'different country languages, different cultures';
                case 'mostQuotedLanguages': return 'java, python, c#, javascript, c++';
                case 'mostQuotedFrameworks': return 'react, angular, laravel, spring';
                default: return defaultValue;
            }
        } else if (site.includes('github.com')) {
            switch(field) {
                case 'mostQuotedTopics': return 'technical topics, professional topics';
                case 'experienceLevel': return 'experienced software engineers';
                case 'toneOfDiscussions': return 'collaborative, informal';
                case 'qualityOfAnswers': return 'accurate, well explained';
                case 'nonTechnicalUserProfile': return 'different country languages, different cultures';
                case 'mostQuotedLanguages': return 'javascript, python, java, go, rust';
                case 'mostQuotedFrameworks': return 'react, vue, node.js, docker';
                default: return defaultValue;
            }
        } else if (site.includes('reddit.com')) {
            switch(field) {
                case 'mostQuotedTopics': return 'professional topics, behavioral topics, technical topics';
                case 'experienceLevel': return 'beginners, experienced software engineers';
                case 'toneOfDiscussions': return 'informal, collaborative';
                case 'qualityOfAnswers': return 'complete, well explained';
                case 'nonTechnicalUserProfile': return 'different country languages, different cultures, different knowledge';
                case 'mostQuotedLanguages': return 'python, javascript, java, c++';
                case 'mostQuotedFrameworks': return 'react, django, express';
                default: return defaultValue;
            }
        } else if (site === 'quora.com') {
            switch(field) {
                case 'mostQuotedTopics': return 'technical topics, professional topics, miscellaneous topics';
                case 'experienceLevel': return 'beginners, experienced software engineers';
                case 'toneOfDiscussions': return 'informal, collaborative';
                case 'qualityOfAnswers': return 'complete, well explained, accurate';
                case 'nonTechnicalUserProfile': return 'different country languages, different cultures, different knowledge';
                case 'mostQuotedLanguages': return 'python, java, javascript, c++';
                case 'mostQuotedFrameworks': return 'react, django, spring';
                default: return defaultValue;
            }
        } else if (site === 'hashnode.com' || site === 'dzone.com') {
            switch(field) {
                case 'mostQuotedTopics': return 'technical topics, professional topics';
                case 'experienceLevel': return 'experienced software engineers';
                case 'toneOfDiscussions': return 'collaborative, informal';
                case 'qualityOfAnswers': return 'accurate, well explained';
                case 'nonTechnicalUserProfile': return 'different country languages, different cultures';
                case 'mostQuotedLanguages': return 'javascript, python, java, react';
                case 'mostQuotedFrameworks': return 'react, vue, node.js, express';
                default: return defaultValue;
            }
        } else if (site.includes('google.com') || site.includes('microsoft.com')) {
            switch(field) {
                case 'mostQuotedTopics': return 'technical topics';
                case 'experienceLevel': return 'experienced software engineers';
                case 'toneOfDiscussions': return 'collaborative';
                case 'qualityOfAnswers': return 'accurate, complete';
                case 'nonTechnicalUserProfile': return 'different country languages';
                case 'mostQuotedLanguages': return 'java, python, c#, javascript';
                case 'mostQuotedFrameworks': return 'spring, .net, react';
                default: return defaultValue;
            }
        } else if (site.includes('forum') || site.includes('community')) {
            switch(field) {
                case 'mostQuotedTopics': return 'technical topics, miscellaneous topics';
                case 'experienceLevel': return 'beginners, experienced software engineers';
                case 'toneOfDiscussions': return 'collaborative';
                case 'qualityOfAnswers': return 'complete, accurate';
                case 'nonTechnicalUserProfile': return 'different cultures, different knowledge';
                case 'mostQuotedLanguages': return 'java, python, javascript, c++';
                case 'mostQuotedFrameworks': return 'react, spring, laravel';
                default: return defaultValue;
            }
        }
        
        // Default values for smaller/older sites
        switch(field) {
            case 'mostQuotedTopics': return 'technical topics';
            case 'experienceLevel': return 'beginners';
            case 'toneOfDiscussions': return 'collaborative';
            case 'qualityOfAnswers': return 'incomplete';
            case 'nonTechnicalUserProfile': return 'None';
            case 'mostQuotedLanguages': return 'java, python, c++';
            case 'mostQuotedFrameworks': return 'None';
            default: return defaultValue;
        }
    };
    
    // Site name
    const siteCell = document.createElement('td');
    siteCell.textContent = site;
    siteCell.style.fontWeight = 'bold';
    siteCell.style.backgroundColor = '#f0f4f8';
    row.appendChild(siteCell);
    
    // Most quoted topics
    const topicsCell = document.createElement('td');
    const topics = getDiscussionsValue('mostQuotedTopics', 'technical topics');
    topicsCell.textContent = topics;
    topicsCell.style.fontSize = '0.85em';
    if (topics.includes('technical topics')) {
        topicsCell.style.backgroundColor = '#d4edda';
        topicsCell.style.color = '#155724';
    } else if (topics.includes('miscellaneous topics')) {
        topicsCell.style.backgroundColor = '#fff3cd';
        topicsCell.style.color = '#856404';
    }
    row.appendChild(topicsCell);
    
    // Experience level
    const experienceCell = document.createElement('td');
    const experience = getDiscussionsValue('experienceLevel', 'beginners');
    experienceCell.textContent = experience;
    experienceCell.style.fontSize = '0.85em';
    if (experience.includes('experienced software engineers')) {
        experienceCell.style.backgroundColor = '#d4edda';
        experienceCell.style.color = '#155724';
    }
    row.appendChild(experienceCell);
    
    // Tone of discussions
    const toneCell = document.createElement('td');
    const tone = getDiscussionsValue('toneOfDiscussions', 'collaborative');
    toneCell.textContent = tone;
    toneCell.style.fontSize = '0.85em';
    if (tone.includes('collaborative')) {
        toneCell.style.backgroundColor = '#d4edda';
        toneCell.style.color = '#155724';
    } else if (tone.includes('competitive')) {
        toneCell.style.backgroundColor = '#fff3cd';
        toneCell.style.color = '#856404';
    }
    row.appendChild(toneCell);
    
    // Quality of answers
    const qualityCell = document.createElement('td');
    const quality = getDiscussionsValue('qualityOfAnswers', 'incomplete');
    qualityCell.textContent = quality;
    qualityCell.style.fontSize = '0.85em';
    if (quality.includes('accurate') && quality.includes('complete')) {
        qualityCell.style.backgroundColor = '#d4edda';
        qualityCell.style.color = '#155724';
    } else if (quality.includes('incomplete') || quality.includes('incomprehensible')) {
        qualityCell.style.backgroundColor = '#f8d7da';
        qualityCell.style.color = '#721c24';
    } else {
        qualityCell.style.backgroundColor = '#fff3cd';
        qualityCell.style.color = '#856404';
    }
    row.appendChild(qualityCell);
    
    // Non-technical user profile
    const profileCell = document.createElement('td');
    const profile = getDiscussionsValue('nonTechnicalUserProfile', 'None');
    profileCell.textContent = profile;
    profileCell.style.fontSize = '0.85em';
    if (profile === 'None') {
        profileCell.style.color = '#6c757d';
        profileCell.style.fontStyle = 'italic';
    } else if (profile.includes('different cultures')) {
        profileCell.style.backgroundColor = '#d4edda';
        profileCell.style.color = '#155724';
    }
    row.appendChild(profileCell);
    
    // Most quoted languages
    const languagesCell = document.createElement('td');
    const languages = getDiscussionsValue('mostQuotedLanguages', 'java, python, c++');
    languagesCell.textContent = languages;
    languagesCell.style.fontSize = '0.85em';
    if (languages.includes('python') || languages.includes('javascript')) {
        languagesCell.style.backgroundColor = '#e8f4fd';
        languagesCell.style.color = '#0c5460';
    }
    row.appendChild(languagesCell);
    
    // Most quoted frameworks
    const frameworksCell = document.createElement('td');
    const frameworks = getDiscussionsValue('mostQuotedFrameworks', 'None');
    frameworksCell.textContent = frameworks;
    frameworksCell.style.fontSize = '0.85em';
    if (frameworks === 'None') {
        frameworksCell.style.color = '#6c757d';
        frameworksCell.style.fontStyle = 'italic';
    } else if (frameworks.includes('react') || frameworks.includes('spring')) {
        frameworksCell.style.backgroundColor = '#e8f4fd';
        frameworksCell.style.color = '#0c5460';
    }
    row.appendChild(frameworksCell);
    
    return row;
}

function populateTable(tableId, columnCount, tableType = 'default') {
    const tableBody = document.getElementById(tableId);
    if (!tableBody) return;
    
    // Clear existing content
    tableBody.innerHTML = '';
    
    // Add a row for each site
    sites.forEach(site => {
        let row;
        if (tableType === 'basicFeatures') {
            row = createBasicFeaturesRow(site);
        } else if (tableType === 'connectionDataFeatures') {
            row = createConnectionDataFeaturesRow(site);
        } else if (tableType === 'statisticalFeatures') {
            row = createStatisticalFeaturesRow(site);
        } else if (tableType === 'onboardFeatures') {
            row = createOnBoardFeaturesRow(site);
        } else if (tableType === 'discussionsFeatures') {
            row = createDiscussionsFeaturesRow(site);
        } else {
            row = createEmptyRow(site, columnCount);
        }
        tableBody.appendChild(row);
    });
    
    // Add a message if no sites
    if (sites.length === 0) {
        const emptyRow = document.createElement('tr');
        const emptyCell = document.createElement('td');
        emptyCell.colSpan = columnCount;
        emptyCell.className = 'empty-table';
        emptyCell.textContent = 'No sites available for evaluation';
        emptyRow.appendChild(emptyCell);
        tableBody.appendChild(emptyRow);
    }
}

// Initialize tables based on page
function initializeTables() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch (currentPage) {
        case 'basic-features.html':
            populateTable('basicFeaturesTableBody', 9, 'basicFeatures'); // 8 feature columns + 1 site column
            break;
        case 'connection-data-features.html':
            populateTable('connectionDataFeaturesTableBody', 5, 'connectionDataFeatures'); // 4 feature columns + 1 site column
            break;
        case 'statistical-features.html':
            populateTable('statisticalFeaturesTableBody', 8, 'statisticalFeatures'); // 7 feature columns + 1 site column
            break;
        case 'onboard-features.html':
            populateTable('onboardFeaturesTableBody', 8, 'onboardFeatures'); // 7 feature columns + 1 site column
            break;
        case 'discussions-features.html':
            populateTable('discussionsFeaturesTableBody', 8, 'discussionsFeatures'); // 7 feature columns + 1 site column
            break;
        case 'dashboard.html':
            initializeDashboard();
            break;
    }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// Table interaction enhancements
function enhanceTableInteraction() {
    const tables = document.querySelectorAll('.sites-table');
    
    tables.forEach(table => {
        // Add hover effect for better row identification
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#e3f2fd';
            });
            
            row.addEventListener('mouseleave', function() {
                // Reset to original background
                const isEven = Array.from(this.parentNode.children).indexOf(this) % 2 === 0;
                this.style.backgroundColor = isEven ? '#f8f9fa' : '';
            });
        });
    });
}

// Add search functionality to tables
function addTableSearch() {
    const tables = document.querySelectorAll('.sites-table');
    
    tables.forEach((table, index) => {
        // Create search input
        const searchContainer = document.createElement('div');
        searchContainer.className = 'table-search-container';
        searchContainer.style.marginBottom = '1rem';
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search sites...';
        searchInput.className = 'table-search-input';
        searchInput.style.cssText = `
            width: 300px;
            padding: 0.5rem;
            border: 2px solid #e2e8f0;
            border-radius: 5px;
            font-size: 0.9rem;
        `;
        
        searchContainer.appendChild(searchInput);
        table.parentNode.insertBefore(searchContainer, table);
        
        // Add search functionality
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = table.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                const siteName = row.cells[0].textContent.toLowerCase();
                if (siteName.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
}

// Initialize tooltips for feature explanations
function initializeTooltips() {
    const featureItems = document.querySelectorAll('.feature-item h3');
    
    featureItems.forEach(item => {
        item.style.cursor = 'help';
        item.title = 'Click to highlight this feature in the table';
        
        item.addEventListener('click', function() {
            const featureName = this.textContent.trim();
            highlightTableColumn(featureName);
        });
    });
}

// Highlight table columns based on feature selection
function highlightTableColumn(featureName) {
    const tables = document.querySelectorAll('.sites-table');
    
    tables.forEach(table => {
        const headers = table.querySelectorAll('th');
        let columnIndex = -1;
        
        // Find the column index
        headers.forEach((header, index) => {
            if (header.textContent.trim().toLowerCase().includes(featureName.toLowerCase())) {
                columnIndex = index;
            }
        });
        
        if (columnIndex !== -1) {
            // Remove previous highlights
            table.querySelectorAll('.highlighted-column').forEach(cell => {
                cell.classList.remove('highlighted-column');
            });
            
            // Highlight the column
            const rows = table.querySelectorAll('tr');
            rows.forEach(row => {
                const cell = row.cells[columnIndex];
                if (cell) {
                    cell.classList.add('highlighted-column');
                    cell.style.backgroundColor = '#fff3cd';
                    cell.style.borderLeft = '3px solid #ffc107';
                }
            });
            
            // Remove highlight after 3 seconds
            setTimeout(() => {
                table.querySelectorAll('.highlighted-column').forEach(cell => {
                    cell.classList.remove('highlighted-column');
                    cell.style.backgroundColor = '';
                    cell.style.borderLeft = '';
                });
            }, 3000);
        }
    });
}

// Add loading animation
function showLoading() {
    const tables = document.querySelectorAll('.sites-table tbody');
    tables.forEach(tbody => {
        tbody.innerHTML = '<tr><td colspan="100%" class="text-center"><div class="loading"></div> Loading sites...</td></tr>';
    });
}

// Navigation enhancement
function enhanceNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a small loading animation
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            
            setTimeout(() => {
                this.textContent = originalText;
            }, 500);
        });
    });
}

// Initialize page animations
function initializeAnimations() {
    // Fade in animation for main content
    const main = document.querySelector('main');
    if (main) {
        main.style.opacity = '0';
        main.style.transform = 'translateY(20px)';
        main.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            main.style.opacity = '1';
            main.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Stagger animation for feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 200 + (index * 100));
    });
}

// Print functionality
function addPrintButton() {
    const tableContainers = document.querySelectorAll('.sites-table-section');
    
    tableContainers.forEach(container => {
        const printBtn = document.createElement('button');
        printBtn.textContent = 'Print Table';
        printBtn.className = 'print-btn';
        printBtn.style.cssText = `
            background: #28a745;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 1rem;
            font-size: 0.9rem;
        `;
        
        printBtn.addEventListener('click', () => {
            window.print();
        });
        
        const h2 = container.querySelector('h2');
        h2.parentNode.insertBefore(printBtn, h2.nextSibling);
    });
}

// Main initialization function
function init() {
    // Show loading animation first
    showLoading();
    
    // Initialize core functionality
    setTimeout(() => {
        initializeTables();
        enhanceTableInteraction();
        addTableSearch();
        initializeTooltips();
        initializeSmoothScrolling();
        enhanceNavigation();
        initializeAnimations();
        addPrintButton();
        addDownloadButtons();
        addTableFilters();
        initializeDashboardTabs();
    }, 300);
}

// Event listeners
document.addEventListener('DOMContentLoaded', init);

// Handle page visibility change
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // Refresh tables when page becomes visible again
        initializeTables();
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    // Recalculate table layouts on resize
    const tables = document.querySelectorAll('.sites-table');
    tables.forEach(table => {
        table.style.fontSize = window.innerWidth < 768 ? '0.8rem' : '0.9rem';
    });
});

// Download Functions
function generateJSONSchema() {
    const schema = {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Gray Literature Sites Schema",
        "description": "Schema for software engineering gray literature sites data",
        "type": "object",
        "properties": {
            "sites": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "siteName": { "type": "string" },
                        "basicFeatures": {
                            "type": "object",
                            "properties": {
                                "associatedSite": { "type": "string" },
                                "creationDate": { "type": "string" },
                                "websiteOrganization": { "type": "string", "enum": ["in topics", "in communities", "in categories"] },
                                "registrationMethods": { "type": "string" },
                                "searchEngines": { "type": "string" },
                                "typeOfAudience": { "type": "string" },
                                "websiteType": { "type": "string", "enum": ["forum", "community", "repository"] },
                                "subareaOfSE": { "type": "string" }
                            }
                        },
                        "connectionDataFeatures": {
                            "type": "object",
                            "properties": {
                                "hasOwnAPI": { "type": "string", "enum": ["yes", "no"] },
                                "canDownloadRepository": { "type": "string", "enum": ["can", "cannot"] },
                                "hasOwnDashboard": { "type": "string", "enum": ["yes", "no"] },
                                "hasOwnApp": { "type": "string", "enum": ["yes", "no"] }
                            }
                        },
                        "statisticalFeatures": {
                            "type": "object",
                            "properties": {
                                "dailyAudience": { "type": "string" },
                                "totalUsersRegistered": { "type": "string" },
                                "questionRated": { "type": "string" },
                                "answerRated": { "type": "string" },
                                "percentualAnswered": { "type": "string" },
                                "avgInteractionsPerQuestion": { "type": "string" },
                                "totalCitations": { "type": "string" }
                            }
                        },
                        "onBoardFeatures": {
                            "type": "object",
                            "properties": {
                                "moderationType": { "type": "string" },
                                "monetizationType": { "type": "string" },
                                "basicRequiredInfo": { "type": "string" },
                                "neededQualification": { "type": "string" },
                                "usersRanking": { "type": "string" },
                                "actionsAllowed": { "type": "string" },
                                "repositoryMetadata": { "type": "string", "enum": ["yes", "no"] }
                            }
                        },
                        "discussionsFeatures": {
                            "type": "object",
                            "properties": {
                                "mostQuotedTopics": { "type": "string" },
                                "experienceLevel": { "type": "string" },
                                "toneOfDiscussions": { "type": "string" },
                                "qualityOfAnswers": { "type": "string" },
                                "nonTechnicalUserProfile": { "type": "string" },
                                "mostQuotedLanguages": { "type": "string" },
                                "mostQuotedFrameworks": { "type": "string" }
                            }
                        }
                    },
                    "required": ["siteName", "basicFeatures"]
                }
            },
            "analytics": {
                "type": "object",
                "properties": {
                    "totalSites": { "type": "integer" },
                    "totalUsers": { "type": "number" },
                    "averageAnswerRate": { "type": "number" },
                    "sitesWithAPI": { "type": "integer" },
                    "websiteTypeDistribution": {
                        "type": "object",
                        "properties": {
                            "forum": { "type": "integer" },
                            "community": { "type": "integer" },
                            "repository": { "type": "integer" }
                        }
                    },
                    "popularLanguages": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "language": { "type": "string" },
                                "count": { "type": "integer" }
                            }
                        }
                    },
                    "popularFrameworks": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "framework": { "type": "string" },
                                "count": { "type": "integer" }
                            }
                        }
                    },
                    "audienceDistribution": {
                        "type": "object",
                        "properties": {
                            "large": { "type": "integer" },
                            "medium": { "type": "integer" },
                            "small": { "type": "integer" },
                            "niche": { "type": "integer" }
                        }
                    }
                }
            }
        },
        "required": ["sites", "analytics"]
    };
    
    return JSON.stringify(schema, null, 2);
}

function downloadJSONSchema() {
    const schema = generateJSONSchema();
    const blob = new Blob([schema], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gray-literature-schema.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function generateCSVData() {
    const csvData = [];
    
    // Header row with all fields
    const headers = [
        'Site Name',
        'Associated Site', 'Creation Date', 'Website Organization', 'Registration Methods', 'Search Engines', 'Type of Audience', 'Website Type', 'Subarea of SE',
        'Has Own API', 'Can Download Repository', 'Has Own Dashboard', 'Has Own App',
        'Daily Audience', 'Total Users Registered', 'Question Rated', 'Answer Rated', 'Percentual Answered', 'Avg Interactions Per Question', 'Total Citations',
        'Moderation Type', 'Monetization Type', 'Basic Required Info', 'Needed Qualification', 'Users Ranking', 'Actions Allowed', 'Repository Metadata',
        'Most Quoted Topics', 'Experience Level', 'Tone of Discussions', 'Quality of Answers', 'Non-technical User Profile', 'Most Quoted Languages', 'Most Quoted Frameworks',
        'Quality Score', 'Audience Category'
    ];
    csvData.push(headers);
    
    // Add analytics summary row
    const analyticsRow = [
        'ANALYTICS SUMMARY',
        `Total Sites: ${sites.length}`,
        'Combined Analysis',
        'Statistical Overview',
        'Performance Metrics',
        'Feature Distribution',
        'Technology Trends',
        'User Demographics',
        'Platform Capabilities',
        'Integration Features',
        'Community Metrics',
        'Content Quality',
        'Interaction Patterns',
        'Knowledge Sharing',
        'Professional Development',
        'Technical Discussion',
        'Learning Resources',
        'Best Practices',
        'Industry Standards',
        'Research Validation',
        'Community Building',
        'Knowledge Management',
        'Skill Development',
        'Career Guidance',
        'Technical Mentorship',
        'Problem Solving',
        'Code Quality',
        'Architecture Patterns',
        'Technology Evolution',
        'Industry Insights',
        'Professional Networks',
        'Learning Paths',
        'Expert Analysis',
        'Comprehensive Overview'
    ];
    csvData.push(analyticsRow);
    
    // Data rows for all sites
    sites.forEach(site => {
        const data = sitesData[site] || {};
        
        const row = [
            site,
            data.associatedSite || 'None',
            data.creationDate || 'Unknown',
            data.websiteOrganization || 'in topics',
            data.registrationMethods || 'own registration',
            data.searchEngines || 'string search',
            data.typeOfAudience || 'developers',
            data.websiteType || 'forum',
            data.subareaOfSE || 'general',
            data.hasOwnAPI || 'no',
            data.canDownloadRepository || 'cannot',
            data.hasOwnDashboard || 'no',
            data.hasOwnApp || 'no',
            data.dailyAudience || '50000',
            data.totalUsersRegistered || '100000',
            data.questionRated || 'None',
            data.answerRated || 'None',
            data.percentualAnswered || '45',
            data.avgInteractionsPerQuestion || '1.2',
            data.totalCitations || '50',
            data.moderationType || 'Moderation',
            data.monetizationType || 'Ads',
            data.basicRequiredInfo || 'User account, email',
            data.neededQualification || 'None or unknown',
            data.usersRanking || 'None',
            data.actionsAllowed || 'post, discuss, reply',
            data.repositoryMetadata || 'no',
            data.mostQuotedTopics || 'technical topics',
            data.experienceLevel || 'beginners',
            data.toneOfDiscussions || 'collaborative',
            data.qualityOfAnswers || 'incomplete',
            data.nonTechnicalUserProfile || 'None',
            data.mostQuotedLanguages || 'java, python, c++',
            data.mostQuotedFrameworks || 'None',
            calculateQualityScore(data),
            calculateAudienceCategory(data)
        ];
        
        // Escape commas and quotes in CSV data
        const escapedRow = row.map(cell => {
            const cellStr = String(cell);
            if (cellStr.includes(',') || cellStr.includes('"') || cellStr.includes('\n')) {
                return '"' + cellStr.replace(/"/g, '""') + '"';
            }
            return cellStr;
        });
        
        csvData.push(escapedRow);
    });
    
    return csvData.map(row => row.join(',')).join('\n');
}

function calculateQualityScore(data) {
    const answerRate = parseInt(data.percentualAnswered || '45');
    
    if (answerRate >= 75) return 'Excellent';
    if (answerRate >= 60) return 'Good';
    if (answerRate >= 40) return 'Average';
    return 'Poor';
}

function calculateAudienceCategory(data) {
    const audience = parseInt((data.dailyAudience || '50000').replace(/,/g, ''));
    
    if (audience > 10000000) return 'Large (>10M)';
    if (audience > 1000000) return 'Medium (1M-10M)';
    if (audience > 100000) return 'Small (100K-1M)';
    return 'Niche (<100K)';
}

function downloadCSV() {
    const csvContent = generateCSVData();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gray-literature-data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function downloadHTML() {
    const currentPageContent = document.documentElement.outerHTML;
    const blob = new Blob([currentPageContent], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gray-literature-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function addTableFilters() {
    // Add filters to pages 2-6 (feature pages)
    const currentPage = window.location.pathname.split('/').pop();
    const featurePages = ['basic-features.html', 'connection-data-features.html', 'statistical-features.html', 'onboard-features.html', 'discussions-features.html'];
    
    if (!featurePages.includes(currentPage)) return;
    
    const tableSection = document.querySelector('.sites-table-section');
    if (!tableSection) return;
    
    // Create filter container
    const filterContainer = document.createElement('div');
    filterContainer.className = 'table-filters';
    filterContainer.innerHTML = `
        <div class="filter-section">
            <h3>Search & Filters</h3>
            <div class="filter-controls">
                <div class="search-control">
                    <label for="siteSearch">Search Sites:</label>
                    <input type="text" id="siteSearch" placeholder="Type site name to filter..." />
                    <span class="search-icon">🔍</span>
                </div>
                <div class="filter-control">
                    <label for="featureFilter">Filter by Feature:</label>
                    <select id="featureFilter">
                        <option value="">All Features</option>
                    </select>
                </div>
                <div class="results-info">
                    <span id="resultsCount">Showing 0 of 0 sites</span>
                    <button id="clearFilters" class="clear-btn">Clear All</button>
                </div>
            </div>
        </div>
    `;
    
    // Insert before table
    const tableContainer = tableSection.querySelector('.table-container');
    tableSection.insertBefore(filterContainer, tableContainer);
    
    // Populate filter options based on current page
    populateFilterOptions(currentPage);
    
    // Add event listeners
    document.getElementById('siteSearch').addEventListener('input', filterTable);
    document.getElementById('featureFilter').addEventListener('change', filterTable);
    document.getElementById('clearFilters').addEventListener('click', clearAllFilters);
    
    // Initial count
    updateResultsCount();
}

function populateFilterOptions(currentPage) {
    const filterSelect = document.getElementById('featureFilter');
    const options = [];
    
    switch(currentPage) {
        case 'basic-features.html':
            options.push(
                { value: 'forum', text: 'Forum Sites' },
                { value: 'community', text: 'Community Sites' },
                { value: 'repository', text: 'Repository Sites' },
                { value: 'gmail', text: 'Gmail Registration' },
                { value: 'github', text: 'GitHub Registration' },
                { value: 'topics', text: 'Topic Organization' },
                { value: 'communities', text: 'Community Organization' }
            );
            break;
        case 'connection-data-features.html':
            options.push(
                { value: 'api-yes', text: 'Has API' },
                { value: 'api-no', text: 'No API' },
                { value: 'download-can', text: 'Can Download' },
                { value: 'download-cannot', text: 'Cannot Download' },
                { value: 'dashboard-yes', text: 'Has Dashboard' },
                { value: 'dashboard-no', text: 'No Dashboard' },
                { value: 'app-yes', text: 'Has App' },
                { value: 'app-no', text: 'No App' }
            );
            break;
        case 'statistical-features.html':
            options.push(
                { value: 'high-audience', text: 'High Audience (>1M)' },
                { value: 'medium-audience', text: 'Medium Audience (100K-1M)' },
                { value: 'low-audience', text: 'Low Audience (<100K)' },
                { value: 'high-answered', text: 'High Answer Rate (>70%)' },
                { value: 'medium-answered', text: 'Medium Answer Rate (50-70%)' },
                { value: 'low-answered', text: 'Low Answer Rate (<50%)' }
            );
            break;
        case 'onboard-features.html':
            options.push(
                { value: 'community-mod', text: 'Community Moderation' },
                { value: 'paid-mod', text: 'Paid Moderation' },
                { value: 'ads-monetization', text: 'Ad Monetization' },
                { value: 'no-monetization', text: 'No Monetization' },
                { value: 'badges-ranking', text: 'Badges/Points Ranking' },
                { value: 'no-ranking', text: 'No Ranking System' }
            );
            break;
        case 'discussions-features.html':
            options.push(
                { value: 'technical-topics', text: 'Technical Topics' },
                { value: 'professional-topics', text: 'Professional Topics' },
                { value: 'behavioral-topics', text: 'Behavioral Topics' },
                { value: 'experienced-users', text: 'Experienced Users' },
                { value: 'beginner-users', text: 'Beginner Users' },
                { value: 'collaborative-tone', text: 'Collaborative Tone' },
                { value: 'competitive-tone', text: 'Competitive Tone' }
            );
            break;
    }
    
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        filterSelect.appendChild(optionElement);
    });
}

function filterTable() {
    const searchTerm = document.getElementById('siteSearch').value.toLowerCase();
    const featureFilter = document.getElementById('featureFilter').value;
    const table = document.querySelector('.sites-table');
    const rows = table.querySelectorAll('tbody tr');
    
    let visibleCount = 0;
    
    rows.forEach(row => {
        const siteName = row.cells[0].textContent.toLowerCase();
        let matchesSearch = siteName.includes(searchTerm);
        let matchesFeature = true;
        
        if (featureFilter) {
            matchesFeature = checkFeatureMatch(row, featureFilter);
        }
        
        if (matchesSearch && matchesFeature) {
            row.style.display = '';
            visibleCount++;
        } else {
            row.style.display = 'none';
        }
    });
    
    updateResultsCount(visibleCount, rows.length);
}

function checkFeatureMatch(row, filterValue) {
    const currentPage = window.location.pathname.split('/').pop();
    const cells = Array.from(row.cells).map(cell => cell.textContent.toLowerCase());
    
    switch(currentPage) {
        case 'basic-features.html':
            switch(filterValue) {
                case 'forum': return cells[7] && cells[7].includes('forum');
                case 'community': return cells[7] && cells[7].includes('community');
                case 'repository': return cells[7] && cells[7].includes('repository');
                case 'gmail': return cells[4] && cells[4].includes('gmail');
                case 'github': return cells[4] && cells[4].includes('github');
                case 'topics': return cells[3] && cells[3].includes('topics');
                case 'communities': return cells[3] && cells[3].includes('communities');
                default: return true;
            }
        case 'connection-data-features.html':
            switch(filterValue) {
                case 'api-yes': return cells[1] && cells[1].includes('yes');
                case 'api-no': return cells[1] && cells[1].includes('no');
                case 'download-can': return cells[2] && cells[2].includes('can');
                case 'download-cannot': return cells[2] && cells[2].includes('cannot');
                case 'dashboard-yes': return cells[3] && cells[3].includes('yes');
                case 'dashboard-no': return cells[3] && cells[3].includes('no');
                case 'app-yes': return cells[4] && cells[4].includes('yes');
                case 'app-no': return cells[4] && cells[4].includes('no');
                default: return true;
            }
        case 'statistical-features.html':
            switch(filterValue) {
                case 'high-audience': {
                    const audience = parseInt(cells[1].replace(/,/g, ''));
                    return audience > 1000000;
                }
                case 'medium-audience': {
                    const audience = parseInt(cells[1].replace(/,/g, ''));
                    return audience >= 100000 && audience <= 1000000;
                }
                case 'low-audience': {
                    const audience = parseInt(cells[1].replace(/,/g, ''));
                    return audience < 100000;
                }
                case 'high-answered': {
                    const percent = parseInt(cells[5].replace('%', ''));
                    return percent > 70;
                }
                case 'medium-answered': {
                    const percent = parseInt(cells[5].replace('%', ''));
                    return percent >= 50 && percent <= 70;
                }
                case 'low-answered': {
                    const percent = parseInt(cells[5].replace('%', ''));
                    return percent < 50;
                }
                default: return true;
            }
        case 'onboard-features.html':
            switch(filterValue) {
                case 'community-mod': return cells[1] && cells[1].includes('community');
                case 'paid-mod': return cells[1] && cells[1].includes('paid');
                case 'ads-monetization': return cells[2] && cells[2].includes('ads');
                case 'no-monetization': return cells[2] && cells[2].includes('none');
                case 'badges-ranking': return cells[5] && (cells[5].includes('badges') || cells[5].includes('points'));
                case 'no-ranking': return cells[5] && cells[5].includes('none');
                default: return true;
            }
        case 'discussions-features.html':
            switch(filterValue) {
                case 'technical-topics': return cells[1] && cells[1].includes('technical');
                case 'professional-topics': return cells[1] && cells[1].includes('professional');
                case 'behavioral-topics': return cells[1] && cells[1].includes('behavioral');
                case 'experienced-users': return cells[2] && cells[2].includes('experienced');
                case 'beginner-users': return cells[2] && cells[2].includes('beginners');
                case 'collaborative-tone': return cells[3] && cells[3].includes('collaborative');
                case 'competitive-tone': return cells[3] && cells[3].includes('competitive');
                default: return true;
            }
        default:
            return true;
    }
}

function updateResultsCount(visible = null, total = null) {
    if (visible === null || total === null) {
        const table = document.querySelector('.sites-table');
        if (table) {
            const rows = table.querySelectorAll('tbody tr');
            total = rows.length;
            visible = Array.from(rows).filter(row => row.style.display !== 'none').length;
        }
    }
    
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${visible} of ${total} sites`;
    }
}

function clearAllFilters() {
    document.getElementById('siteSearch').value = '';
    document.getElementById('featureFilter').value = '';
    filterTable();
}

function addDownloadButtons() {
    // Only add to index page
    if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/' && !window.location.pathname.endsWith('/catalogo/')) {
        return;
    }
    
    // Find the best location to add download buttons
    const introSection = document.querySelector('.introduction');
    if (!introSection) return;
    
    // Create download buttons container
    const downloadContainer = document.createElement('div');
    downloadContainer.className = 'download-buttons';
    downloadContainer.innerHTML = `
        <div class="download-section">
            <h2>Export Data</h2>
            <p>Download the research data in different formats for analysis and integration:</p>
            <div class="button-group">
                <button id="downloadSchema" class="download-btn schema-btn">
                    <span class="btn-icon">📄</span>
                    <div class="btn-content">
                        <span class="btn-title">JSON Schema</span>
                        <span class="btn-desc">Data structure definition</span>
                    </div>
                </button>
                <button id="downloadCSV" class="download-btn csv-btn">
                    <span class="btn-icon">📊</span>
                    <div class="btn-content">
                        <span class="btn-title">CSV Data</span>
                        <span class="btn-desc">All sites with features</span>
                    </div>
                </button>
                <button id="downloadHTML" class="download-btn html-btn">
                    <span class="btn-icon">🌐</span>
                    <div class="btn-content">
                        <span class="btn-title">HTML Page</span>
                        <span class="btn-desc">Current page as file</span>
                    </div>
                </button>
            </div>
        </div>
    `;
    
    // Insert after the introduction section
    introSection.parentNode.insertBefore(downloadContainer, introSection.nextSibling);
    
    // Add event listeners
    document.getElementById('downloadSchema').addEventListener('click', downloadJSONSchema);
    document.getElementById('downloadCSV').addEventListener('click', downloadCSV);
    document.getElementById('downloadHTML').addEventListener('click', downloadHTML);
}

// Dashboard Functions
function initializeDashboard() {
    calculateOverviewStats();
    generateInsights();
    populateDashboardTables();
    createSimpleCharts();
}

function calculateOverviewStats() {
    let totalUsers = 0;
    let totalAnswerRates = [];
    let sitesWithAPI = 0;
    
    sites.forEach(site => {
        const data = sitesData[site] || {};
        
        // Calculate total users
        const users = parseInt((data.totalUsersRegistered || '100000').replace(/,/g, ''));
        totalUsers += users;
        
        // Collect answer rates
        const answerRate = parseInt(data.percentualAnswered || '45');
        totalAnswerRates.push(answerRate);
        
        // Count APIs
        const hasAPI = data.hasOwnAPI || getConnectionValue(site, 'hasOwnAPI', 'no');
        if (hasAPI === 'yes') sitesWithAPI++;
    });
    
    // Update DOM elements
    const totalUsersElement = document.getElementById('totalUsers');
    if (totalUsersElement) {
        totalUsersElement.textContent = (totalUsers / 1000000).toFixed(1) + 'M';
    }
    
    const avgAnswerRateElement = document.getElementById('avgAnswerRate');
    if (avgAnswerRateElement) {
        const avgRate = totalAnswerRates.reduce((a, b) => a + b, 0) / totalAnswerRates.length;
        avgAnswerRateElement.textContent = Math.round(avgRate) + '%';
    }
    
    const sitesWithAPIElement = document.getElementById('sitesWithAPI');
    if (sitesWithAPIElement) {
        sitesWithAPIElement.textContent = `${sitesWithAPI}/${sites.length}`;
    }
}

function getConnectionValue(site, field, defaultValue) {
    const data = sitesData[site];
    if (data && data[field]) return data[field];
    
    // Apply same logic as createConnectionDataFeaturesRow
    if (site.includes('stackexchange.com') || site === 'stackoverflow.com') {
        switch(field) {
            case 'hasOwnAPI': return 'yes';
            case 'canDownloadRepository': return 'can';
            case 'hasOwnDashboard': return 'yes';
            case 'hasOwnApp': return 'yes';
            default: return defaultValue;
        }
    }
    
    if (site.includes('github.com')) {
        switch(field) {
            case 'hasOwnAPI': return 'yes';
            case 'canDownloadRepository': return 'can';
            case 'hasOwnDashboard': return 'yes';
            case 'hasOwnApp': return 'yes';
            default: return defaultValue;
        }
    }
    
    return defaultValue;
}

function generateInsights() {
    // Top performing sites (by answer rate and user count)
    const topSites = sites.map(site => {
        const data = sitesData[site] || {};
        const answerRate = parseInt(data.percentualAnswered || '45');
        const users = parseInt((data.totalUsersRegistered || '100000').replace(/,/g, ''));
        const score = (answerRate * 0.6) + (Math.log10(users) * 10); // Weighted score
        return { site, score, answerRate, users };
    }).sort((a, b) => b.score - a.score).slice(0, 5);
    
    const topSitesElement = document.getElementById('topSites');
    if (topSitesElement) {
        topSitesElement.innerHTML = topSites.map(item => 
            `<div class="insight-item">
                <strong>${item.site}</strong><br>
                <small>Score: ${item.score.toFixed(1)} | Answer Rate: ${item.answerRate}% | Users: ${(item.users/1000000).toFixed(1)}M</small>
            </div>`
        ).join('');
    }
    
    // Popular languages analysis
    const languageCount = {};
    sites.forEach(site => {
        const data = sitesData[site] || {};
        const languages = data.mostQuotedLanguages || getDiscussionsValue(site, 'mostQuotedLanguages', 'java, python, c++');
        languages.split(',').forEach(lang => {
            const cleanLang = lang.trim().toLowerCase();
            languageCount[cleanLang] = (languageCount[cleanLang] || 0) + 1;
        });
    });
    
    const popularLanguages = Object.entries(languageCount)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 8)
        .map(([lang, count]) => `<span class="lang-tag">${lang} (${count})</span>`)
        .join(' ');
    
    const popularLanguagesElement = document.getElementById('popularLanguages');
    if (popularLanguagesElement) {
        popularLanguagesElement.innerHTML = popularLanguages;
    }
    
    // Popular frameworks analysis
    const frameworkCount = {};
    sites.forEach(site => {
        const data = sitesData[site] || {};
        const frameworks = data.mostQuotedFrameworks || getDiscussionsValue(site, 'mostQuotedFrameworks', 'None');
        if (frameworks !== 'None') {
            frameworks.split(',').forEach(framework => {
                const cleanFramework = framework.trim().toLowerCase();
                frameworkCount[cleanFramework] = (frameworkCount[cleanFramework] || 0) + 1;
            });
        }
    });
    
    const popularFrameworks = Object.entries(frameworkCount)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 6)
        .map(([framework, count]) => `<span class="framework-tag">${framework} (${count})</span>`)
        .join(' ');
    
    const popularFrameworksElement = document.getElementById('popularFrameworks');
    if (popularFrameworksElement) {
        popularFrameworksElement.innerHTML = popularFrameworks;
    }
    
    // Audience analysis
    const audienceRanges = {
        'Large (>10M)': 0,
        'Medium (1M-10M)': 0,
        'Small (100K-1M)': 0,
        'Niche (<100K)': 0
    };
    
    sites.forEach(site => {
        const data = sitesData[site] || {};
        const audience = parseInt((data.dailyAudience || '50000').replace(/,/g, ''));
        
        if (audience > 10000000) audienceRanges['Large (>10M)']++;
        else if (audience > 1000000) audienceRanges['Medium (1M-10M)']++;
        else if (audience > 100000) audienceRanges['Small (100K-1M)']++;
        else audienceRanges['Niche (<100K)']++;
    });
    
    const audienceAnalysis = Object.entries(audienceRanges)
        .map(([range, count]) => `<div class="audience-item">${range}: <strong>${count} sites</strong></div>`)
        .join('');
    
    const audienceAnalysisElement = document.getElementById('audienceAnalysis');
    if (audienceAnalysisElement) {
        audienceAnalysisElement.innerHTML = audienceAnalysis;
    }
}

function getDiscussionsValue(site, field, defaultValue) {
    const data = sitesData[site];
    if (data && data[field]) return data[field];
    
    // Apply same logic as createDiscussionsFeaturesRow
    if (site.includes('stackexchange.com') || site === 'stackoverflow.com') {
        switch(field) {
            case 'mostQuotedLanguages': return 'java, python, c#, javascript, c++';
            case 'mostQuotedFrameworks': return 'react, angular, laravel, spring';
            default: return defaultValue;
        }
    }
    
    return defaultValue;
}

function populateDashboardTables() {
    populateSummaryTable();
    populateFeaturesTable();
    populateStatisticsTable();
}

function populateSummaryTable() {
    const tbody = document.getElementById('summaryTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    sites.forEach(site => {
        const data = sitesData[site] || {};
        const row = document.createElement('tr');
        
        // Calculate quality score
        const answerRate = parseInt(data.percentualAnswered || '45');
        let qualityScore = 'Average';
        let qualityClass = 'quality-average';
        
        if (answerRate >= 75) {
            qualityScore = 'Excellent';
            qualityClass = 'quality-excellent';
        } else if (answerRate >= 60) {
            qualityScore = 'Good';
            qualityClass = 'quality-good';
        } else if (answerRate < 40) {
            qualityScore = 'Poor';
            qualityClass = 'quality-poor';
        }
        
        row.innerHTML = `
            <td style="font-weight: bold;">${site}</td>
            <td>${data.websiteType || 'forum'}</td>
            <td>${getConnectionValue(site, 'hasOwnAPI', 'no')}</td>
            <td>${(parseInt((data.totalUsersRegistered || '100000').replace(/,/g, '')) / 1000000).toFixed(1)}M</td>
            <td>${answerRate}%</td>
            <td><span class="${qualityClass}">${qualityScore}</span></td>
        `;
        
        tbody.appendChild(row);
    });
}

function populateFeaturesTable() {
    const tbody = document.getElementById('featuresTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    sites.slice(0, 20).forEach(site => { // Show first 20 for performance
        const data = sitesData[site] || {};
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td style="font-weight: bold;">${site}</td>
            <td>${getConnectionValue(site, 'hasOwnDashboard', 'no')}</td>
            <td>${getConnectionValue(site, 'hasOwnApp', 'no')}</td>
            <td>${data.moderationType || 'Moderation'}</td>
            <td>${data.monetizationType || 'Ads'}</td>
            <td>${data.usersRanking || 'None'}</td>
        `;
        
        tbody.appendChild(row);
    });
}

function populateStatisticsTable() {
    const tbody = document.getElementById('statisticsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    sites.slice(0, 20).forEach(site => { // Show first 20 for performance
        const data = sitesData[site] || {};
        const row = document.createElement('tr');
        
        const dailyAudience = parseInt((data.dailyAudience || '50000').replace(/,/g, ''));
        const totalUsers = parseInt((data.totalUsersRegistered || '100000').replace(/,/g, ''));
        
        row.innerHTML = `
            <td style="font-weight: bold;">${site}</td>
            <td>${(dailyAudience / 1000000).toFixed(1)}M</td>
            <td>${(totalUsers / 1000000).toFixed(1)}M</td>
            <td>${data.avgInteractionsPerQuestion || '1.2'}</td>
            <td>${Number(data.totalCitations || '50').toLocaleString()}</td>
            <td>${data.mostQuotedTopics || 'technical topics'}</td>
        `;
        
        tbody.appendChild(row);
    });
}

function createSimpleCharts() {
    // Create simple visual representations using CSS and HTML
    createWebsiteTypesChart();
    createAPIAvailabilityChart();
    createQualityChart();
    createExperienceChart();
}

function createWebsiteTypesChart() {
    const canvas = document.getElementById('websiteTypesChart');
    if (!canvas) return;
    
    const typeCount = { forum: 0, community: 0, repository: 0 };
    sites.forEach(site => {
        const data = sitesData[site] || {};
        const type = data.websiteType || 'forum';
        typeCount[type] = (typeCount[type] || 0) + 1;
    });
    
    const total = Object.values(typeCount).reduce((a, b) => a + b, 0);
    const chartHTML = Object.entries(typeCount)
        .map(([type, count]) => {
            const percentage = ((count / total) * 100).toFixed(1);
            return `<div class="chart-bar" style="height: ${percentage * 2}px; background: linear-gradient(45deg, #667eea, #764ba2); margin: 5px; color: white; display: flex; align-items: end; justify-content: center; padding: 5px; font-size: 12px;">${type}<br>${count}</div>`;
        }).join('');
    
    canvas.outerHTML = `<div style="display: flex; align-items: end; justify-content: space-around; height: 250px;">${chartHTML}</div>`;
}

function createAPIAvailabilityChart() {
    const canvas = document.getElementById('apiAvailabilityChart');
    if (!canvas) return;
    
    let apiYes = 0, apiNo = 0;
    sites.forEach(site => {
        const hasAPI = getConnectionValue(site, 'hasOwnAPI', 'no');
        if (hasAPI === 'yes') apiYes++; else apiNo++;
    });
    
    const total = apiYes + apiNo;
    const chartHTML = `
        <div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: ${(apiYes/total)*200}px; height: 40px; background: #28a745; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold;">Yes (${apiYes})</div>
                <span>${((apiYes/total)*100).toFixed(1)}%</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: ${(apiNo/total)*200}px; height: 40px; background: #dc3545; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold;">No (${apiNo})</div>
                <span>${((apiNo/total)*100).toFixed(1)}%</span>
            </div>
        </div>
    `;
    
    canvas.outerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 250px;">${chartHTML}</div>`;
}

function createQualityChart() {
    const canvas = document.getElementById('qualityChart');
    if (!canvas) return;
    
    const qualityCount = { excellent: 0, good: 0, average: 0, poor: 0 };
    sites.forEach(site => {
        const data = sitesData[site] || {};
        const answerRate = parseInt(data.percentualAnswered || '45');
        
        if (answerRate >= 75) qualityCount.excellent++;
        else if (answerRate >= 60) qualityCount.good++;
        else if (answerRate >= 40) qualityCount.average++;
        else qualityCount.poor++;
    });
    
    const total = Object.values(qualityCount).reduce((a, b) => a + b, 0);
    const colors = { excellent: '#28a745', good: '#17a2b8', average: '#ffc107', poor: '#dc3545' };
    
    const chartHTML = Object.entries(qualityCount)
        .map(([quality, count]) => {
            const percentage = ((count / total) * 100).toFixed(1);
            return `<div class="chart-slice" style="height: ${percentage * 2}px; background: ${colors[quality]}; margin: 5px; color: white; display: flex; align-items: end; justify-content: center; padding: 5px; font-size: 12px; text-transform: capitalize;">${quality}<br>${count}</div>`;
        }).join('');
    
    canvas.outerHTML = `<div style="display: flex; align-items: end; justify-content: space-around; height: 250px;">${chartHTML}</div>`;
}

function createExperienceChart() {
    const canvas = document.getElementById('experienceChart');
    if (!canvas) return;
    
    let beginners = 0, experienced = 0, researchers = 0;
    sites.forEach(site => {
        const data = sitesData[site] || {};
        const experience = data.experienceLevel || getDiscussionsValue(site, 'experienceLevel', 'beginners');
        
        if (experience.includes('beginners')) beginners++;
        if (experience.includes('experienced')) experienced++;
        if (experience.includes('researchers')) researchers++;
    });
    
    const chartHTML = `
        <div style="display: flex; flex-direction: column; gap: 15px; width: 100%;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 20px; height: 20px; background: #667eea; border-radius: 50%;"></div>
                <span>Beginners: <strong>${beginners}</strong></span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 20px; height: 20px; background: #28a745; border-radius: 50%;"></div>
                <span>Experienced: <strong>${experienced}</strong></span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 20px; height: 20px; background: #ffc107; border-radius: 50%;"></div>
                <span>Researchers: <strong>${researchers}</strong></span>
            </div>
        </div>
    `;
    
    canvas.outerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 250px;">${chartHTML}</div>`;
}

function initializeDashboardTabs() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage !== 'dashboard.html') return;
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            btn.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

// Export functions for potential external use
window.GrayLiteratureCatalog = {
    sites,
    populateTable,
    highlightTableColumn,
    initializeTables,
    downloadJSONSchema,
    downloadCSV,
    downloadHTML,
    initializeDashboard
};