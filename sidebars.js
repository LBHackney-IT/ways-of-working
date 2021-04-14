module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Release Notes',
      items: ['notes'],
    },
    {
      type: 'category',
      label: 'Home',
      items: ['index','api_standards', 'platform_api_vs_service_api', 'documentation'],
    },
    {
      type: 'category',
      label: 'Principles',
      items: [],
    },
      {
      type: 'category',
      label: 'Development Process',
      items: [
      {
        'Designing your API': ['api_design_principles', 'api_implementation_guidelines','naming_conventions']
      },

      {
        'API Practices and Tools': ['linting','static_code_analysis',]
      },
      {
        'DevOps Practices': ['branching_strategy','deployment_pipeline', 'infrastructure']
      },

      {
        type: 'category',
        label: 'How to build an API',
        items: ['preferred_tech_stack', 'api_boilerplate', 'clean_architecture', {'Testing': ['tdd', 'unit_test', 'integration_tests']},'serverless_lambda',]
      },

    {
    'Deploying your API': [ 'aws_ecs', 'lambda_best_practices', 'multiple_docker_containers']
    },
    {
    'Monitoring': ['centralised_logging', 'uptime_monitoring','alerting']
    },
    {
    'Securing your API': ['api_keys', {'Lambda authoriser': ['generating_tokens']}]
    }

  ]
  },

  {
    type: 'category',
    label: 'Other Useful Information',
    items: ['rds_access', 'ec2_access','postgresql', 'data_migration']
  },
  {
    type: 'category',
    label: 'Contact Us',
    items: ['contact_us'],
  },

]
};