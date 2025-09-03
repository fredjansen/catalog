// Temporary script to add missing connection data features to all sites

// For the remaining sites, add default connection data features
const defaultConnectionData = `        hasOwnAPI: 'no',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'no'`;

// Sites that should have better features
const enhancedSites = {
    'hashnode.com': {
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'no'
    },
    'news.ycombinator.com': {
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'yes'
    },
    'meta.stackexchange.com': {
        hasOwnAPI: 'yes',
        canDownloadRepository: 'can',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes'
    },
    'https://sqa.stackexchange.com/': {
        hasOwnAPI: 'yes',
        canDownloadRepository: 'can',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes'
    },
    'https://langdev.stackexchange.com/': {
        hasOwnAPI: 'yes',
        canDownloadRepository: 'can',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes'
    },
    'reddit.com/r/cscareerquestions': {
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'yes'
    },
    'reddit.com/r/coding': {
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'no',
        hasOwnApp: 'yes'
    },
    'docs.microsoft.com/answers': {
        hasOwnAPI: 'yes',
        canDownloadRepository: 'cannot',
        hasOwnDashboard: 'yes',
        hasOwnApp: 'yes'
    }
};

console.log('Enhanced sites data:');
Object.keys(enhancedSites).forEach(site => {
    const data = enhancedSites[site];
    console.log(`    '${site}': {
        hasOwnAPI: '${data.hasOwnAPI}',
        canDownloadRepository: '${data.canDownloadRepository}',
        hasOwnDashboard: '${data.hasOwnDashboard}',
        hasOwnApp: '${data.hasOwnApp}'
    },`);
});