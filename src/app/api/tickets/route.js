export async function GET() {
    const tickets = [
        {
            id: 't-1001',
            title: 'Cannot connect to VPN',
            description: 'User reports intermittent VPN connectivity errors.',
            priority: 'High',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-10-31T14:05:00Z'
        },
        {
            id: 't-1002',
            title: 'Email not syncing on mobile',
            description: 'Exchange inbox stuck on older messages on iOS.',
            priority: 'Medium',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-10-31T13:10:00Z'
        },
        {
            id: 't-1003',
            title: 'Laptop battery draining fast',
            description: 'Battery drops from 80% to 20% in under an hour',
            priority: 'Low',
            status: 'On hold',
            assignee: 'Tech A',
            updatedAt:'2025-10-30T17:22:00Z'
        },
        {
            id:'t-1004',
            title: 'Okta MFA push failing',
            description: 'Push notifications not received; SMS works intermittenly.',
            priority:'High',
            status: 'In Progress',
            assignee: 'Tech B',
            updatedAt: '2025-10-31T11:59:00Z'
        },
        {
            id:'t-1005',
            title: 'New hire onboarding acess',
            description:'Provision accounts for Finance new hire starting Monday',
            priority:'Medium',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-10-29T09:15:00Z'
        },
        {
            id: 't-1006',
            title: 'Slack notifications delayed',
            description: 'Desktop app shows messages minutes after mobile.',
            priority: 'Low',
            status: 'Resolved',
            assignee: 'Tech D',
            updatedAt: '2025-10-28T12:45:00Z'
        },
        {
            id: 't-1007',
            title: 'Jira SSO Loop',
            description: 'Users redirected back to login after Okta auth.',
            priority: 'High',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-10-27T16:01:00Z'
        },
        {
            id: 't-1008',
            title: 'Printer Jam on Floor 3',
            description: 'Xerox CP452 jam recurring: service code 024-116.',
            priority: 'Medium',
            status: 'In Progress',
            assignee: 'Tech D', 
            updatedAt: '2025-10-31T10:05:00Z'
        },
        {
            id: 't-1009',
            title: 'Chrome freezes on startup',
            description: 'Fresh install; profile migration may be corrupted.',
            priority: 'Medium',
            status: 'On Hold', 
            assignee: 'Tech E', 
            updatedAt:'2025-10-27T16:01:00Z'
        },
        {
            id: 't-1010',
            title: 'VPN split tunnel request',
            description: 'Engineering asks to allow Github via local network.',
            priority: 'Low',
            status: 'Open',
            assignee: 'Unassigned', 
            updatedAt: '2025-10-30T14:31:00Z'
        },
        {
            id: 't-1011',
            title: 'MacOs Sonoma Wi-Fi drops',
            description: 'Several MacBooks report periodic disconnects',
            priority: 'High',
            staus: 'In Progress',
            assignee: 'Tech F',
            updatedAt: '2025-10-31T12:18:00Z',
        },
        {
            id: 't-1012',
            title: 'Password reset self-service issue',
            description: 'Reset emails not delivered to external contractors', 
            prioroty: 'Medium',
            status: 'Open', 
            assignee: 'Unassigned', 
            updatedAt: '2025-10-31T09:00:00Z'
        }
    ];
    return Response.json(tickets);
}
   
   