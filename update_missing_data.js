// Script to add missing Connection and Data Features to all sites
const sitesNeedingUpdate = [
    'dzone.com',
    'experts-exchange.com',
    'findnerd.com',
    'forum.freecodecamp.org',
    'geekinterview.com',
    'developers.google.com/community',
    'news.ycombinator.com',
    'hashnode.com',
    'lobste.rs',
    'meta.stackexchange.com',
    'docs.microsoft.com/answers',
    'producthunt.com',
    'https://langdev.stackexchange.com/',
    'quora.com',
    'reddit.com/r/cscareerquestions',
    'reddit.com/r/coding',
    'reddit.com/r/programming',
    'showwcase.com',
    'sitepoint.com/community',
    'softwaredev.forumotion.com',
    'softwareengineering.stackexchange.com',
    'https://sqa.stackexchange.com/',
    'community.spiceworks.com',
    'techrepublic.com/forums',
    'webdeveloper.com'
];

// Generate the data for each site
sitesNeedingUpdate.forEach(site => {
    let hasOwnAPI, canDownloadRepository, hasOwnDashboard, hasOwnApp;
    
    // Set values based on site characteristics
    if (site.includes('stackexchange.com') || site.includes('stackoverflow.com')) {
        hasOwnAPI = 'yes';
        canDownloadRepository = 'can';
        hasOwnDashboard = 'yes';
        hasOwnApp = 'yes';
    } else if (site.includes('github.')) {
        hasOwnAPI = 'yes';
        canDownloadRepository = 'can';
        hasOwnDashboard = 'yes';
        hasOwnApp = 'yes';
    } else if (site.includes('reddit.com') || site === 'quora.com') {
        hasOwnAPI = 'yes';
        canDownloadRepository = 'cannot';
        hasOwnDashboard = 'no';
        hasOwnApp = 'yes';
    } else if (site.includes('google.com') || site === 'dzone.com' || site === 'hashnode.com') {
        hasOwnAPI = 'yes';
        canDownloadRepository = 'cannot';
        hasOwnDashboard = 'yes';
        hasOwnApp = 'no';
    } else if (site === 'forum.freecodecamp.org') {
        hasOwnAPI = 'no';
        canDownloadRepository = 'can';
        hasOwnDashboard = 'yes';
        hasOwnApp = 'no';
    } else {
        // Default values for smaller/older sites
        hasOwnAPI = 'no';
        canDownloadRepository = 'cannot';
        hasOwnDashboard = 'no';
        hasOwnApp = 'no';
    }
    
    console.log(`        hasOwnAPI: '${hasOwnAPI}',
        canDownloadRepository: '${canDownloadRepository}',
        hasOwnDashboard: '${hasOwnDashboard}',
        hasOwnApp: '${hasOwnApp}'`);
});