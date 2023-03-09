
window.config = [{
    value: 'ibcslibrary',
    label: 'Inforiver Matrix',
    params: [{
        name: 'buildType',
        type: 'dropdown',
        default: 'enterprise',
        options: [{
            value: 'enterprise',
            label: 'Enterprise'
        }, {
            value: 'premium',
            label: 'Premium'
        }, {
            value: 'standard',
            label: 'Standard'
        }, {
            value: 'webbuild',
            label: 'Webbuild-Dev'
        },
          {
            value: 'webbuildprod',
            label: 'Webbuild-Prod'
        }]
    },
    {
        name: 'mockLicence',
        label: 'Enable Mock Licence',
        type: 'switch',
    },
    {
        name: 'serviceUrl',
        label: 'Service URL(Optional)',
        type: 'text',
        optional: true,
    }]
},
{
    value: 'ValqPowerBI',
    label: 'ValQ PowerBI',
    params: [{
        name: 'serviceUrl',
        label: 'Service URL(Optional)',
        type: 'text',
        optional: true,
    }]
},
{
    value: 'inforiver-charts',
    label: 'Inforiver Charts',
    params: [{
        name: 'buildType',
        type: 'dropdown',
        default: 'charts',
        options: [{
            value: 'charts',
            label: 'Charts'
        }]
    },
    {
        name: 'mockLicence',
        label: 'Enable Mock Licence',
        type: 'switch',
    }]
}];
