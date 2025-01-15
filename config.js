
window.config = [{
    value: 'MzWdTFTkLv1bBK1wDA8juB',
    defId: '74c34336-9edd-4763-ba0c-cced811e1c29',
    label: 'Inforiver Matrix',
    params: [{
        name: 'buildType',
        type: 'dropdown',
        default: 'enterprise',
        options: [{
            value: 'premium',
            label: 'Premium'
        }, {
            value: 'enterprise',
            label: 'Enterprise'
        },  {
            value: 'webbuild',
            label: 'Webbuild-Premium'
        }, {
            value: 'webbuild-ent',
            label: 'Webbuild-Enterprise'
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
        name: 'buildType',
        type: 'dropdown',
        default: 'premium',
        options: [{
            value: 'premium',
            label: 'Premium'
        }, {
            value: 'enterprise',
            label: 'Enterprise'
        }]
    },
    {
        name: 'buildEnvironment',
        type: 'dropdown',
        default: 'qa',
        options: [{
            value: 'qa',
            label: 'QA'
        },
        {
            value: 'prod',
            label: 'Production'
        }]
    },
    {
        name: 'mockLicense',
        label: 'Enable Mock License',
        type: 'switch',
    },
    {
        name: 'createTemplate',
        label: 'Enable Template Build',
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
    value: 'valq',
    label: 'ValQ',
    params: [{
        name: 'buildType',
        type: 'dropdown',
        default: 'premium',
        options: [{
            value: 'premium',
            label: 'Premium'
        }, {
            value: 'enterprise',
            label: 'Enterprise'
        }]
    },
    {
        name: 'buildEnvironment',
        type: 'dropdown',
        default: 'qa',
        options: [{
            value: 'qa',
            label: 'QA'
        },
        {
            value: 'prod',
            label: 'Production'
        }]
    },
    {
        name: 'mockLicense',
        label: 'Enable Mock License',
        type: 'switch',
    },
    {
        name: 'createTemplate',
        label: 'Enable Template Build',
        type: 'switch',
    },
    {
        name: 'serviceUrl',
        label: 'Service URL(Optional)',
        type: 'text',
        optional: true,
    },
    {
        name: 'tenantId',
        label: 'Tenant ID(Optional)',
        type: 'text',
        optional: true,
    },
    {
        name: 'privateKey',
        label: 'Private Key(Optional)',
        type: 'text',
        optional: true,
    },
    {
        name : 'publicKey',
        label : 'Public Key(Optional)',
        type : 'text',
        optional : true,
    },
    {
        name: 'iconType',
        label: 'Icon Type(Optional)',
        type: 'dropdown',
        default: 'qa',
        options: [{
            value: 'qa',
            label: 'QA'
        }, {
            value: 'stg',
            label: 'Staging'
        }, {
            value: 'prod',
            label: 'Production'
        }]
    },
    {
        name : 'displayName',
        label : 'Display Name(Optional)',
        type : 'text',
        optional : true,
    }
]
},
{
    value: 'inforiver-charts',
    label: 'Inforiver Charts',
    params: [{
        name: 'mockLicence',
        label: 'Enable Mock Licence',
        type: 'switch',
    }]
}, {
    value: 'InforiverMDM',
    label: 'Inforiver MDE',
    params: [{
        name: 'serviceUrl',
        label: 'Service URL(Optional)',
        type: 'text',
        optional: true,
    },{
        name: 'tenantId',
        label: 'Tenant ID(Optional)',
        type: 'text',
        optional: true,
    }, {
        name: 'privateKey',
        label: 'Private Key(Optional)',
        type: 'text',
        optional: true,
    },{
        name : 'publicKey',
        label : 'Public Key(Optional)',
        type : 'text',
        optional : true,
    },{
        name : 'targetBranchName',
        label : 'Turing app branch(Optional)',
        type : 'text',
        optional : true,
    }]
}];
