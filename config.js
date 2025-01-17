
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
    value: 'Y36dsDvWJ6VcqDkoYTMj5o',
    label: 'ValQ PowerBI',
    defId: '61285feb-70ef-41b9-8eb1-1f406930ad94',
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
    value: 'YArp1wNLCFvccGW3YNsJX6',
    label: 'ValQ',
    defId: '69bade85-bd67-4762-938b-d4474b66ec38',
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
    value: 'KcbsTs2PCqyi6Mn34RHpkc',
    label: 'Inforiver MDE',
    defId: '67f9d9b6-c030-46d7-aaad-6043667ec42c',
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
