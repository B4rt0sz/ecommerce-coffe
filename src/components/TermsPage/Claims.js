const Claims = () => {
  const claimsList = [
    {
      id: 1,
      text: 'Detailed information on the possibility for the Consumer to use extrajudicial means of dealing with complaints and redress and the rules of access to these procedures are available at the offices and on the websites of poviat (municipal) consumer ombudsmen, social organizations whose statutory tasks include consumer protection, voivodship Inspectorates of the Trade Inspection and at the following internet addresses of the Office of Competition and Consumer Protection: http://www.uokik.gov.pl/spory_konsumenckie.php; http://www.uokik.gov.pl/sprawy_indywidualne.php; http://www.uokik.gov.pl/wazne_adresy.php.',
    },
    {
      id: 2,
      text: 'The consumer has the following exemplary possibilities of using out-of-court complaint and redress procedures:',
      textA:
        'The consumer is entitled to apply to a permanent amicable consumer court, referred to in art. 37 of the Act of December 15, 2000 on the Trade Inspection (Journal of Laws of 2014, item 148, as amended), with a request to settle a dispute arising from the Agreement concluded with the Seller,',
      textB:
        'The consumer is entitled to apply to the provincial inspector of the Trade Inspection, pursuant to Art. 36 of the Act of December 15, 2000 on the Trade Inspection (Journal of Laws of 2014, item 148, as amended), with a request to initiate mediation proceedings regarding the amicable settlement of the dispute between the Consumer and the Seller.',
    },
    {
      id: 3,
      text: 'The consumer may obtain free assistance in resolving a dispute between him and the Seller, also using the free assistance of a poviat (municipal) consumer ombudsman or a social organization whose statutory tasks include consumer protection (including the Consumer Federation, Association of Polish Consumers).',
    },
  ]

  const claims = claimsList.map((item) => (
    <li className='termsConditions__claims-item' key={item.id}>
      <p>
        {item.id}. {item.text}
      </p>
      {item.textA && <p>a. {item.textA}</p>}
      {item.textB && <p>b. {item.textB}</p>}
    </li>
  ))

  return (
    <div className='termsConditions__claims'>
      <h1>§ 12 Out-of-court complaint and redress procedures</h1>
      {claims}
    </div>
  )
}

export default Claims
