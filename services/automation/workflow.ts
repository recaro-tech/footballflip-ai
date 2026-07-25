export async function runDealHunterWorkflow(){
  return {
    status:'ready',
    steps:[
      'scan marketplaces',
      'analyse opportunities',
      'rank deals',
      'notify user'
    ]
  };
}
