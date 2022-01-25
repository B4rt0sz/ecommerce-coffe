// CoffeeImages:
import mureaKavutiriImg from '../../public/images/coffee/mureaKavutiri.jpg'
import mureaKavutiriFrontImg from '../../public/images/coffee/mureaKavutiriFront.png'
import mureaKavutiriSideImg from '../../public/images/coffee/mureaKavutiriSide.png'
import mureaKavutiriBackImg from '../../public/images/coffee/mureaKavutiriBack.png'
import laJoyaImg from '../../public/images/coffee/laJoya.jpg'
import laJoyaFrontImg from '../../public/images/coffee/laJoyaFront.png'
import laJoyaSideImg from '../../public/images/coffee/laJoyaSide.png'
import laJoyaBackImg from '../../public/images/coffee/laJoyaBack.png'
import sertaoImg from '../../public/images/coffee/sertao.jpg'
import sertaoFrontImg from '../../public/images/coffee/sertaoFront.jpg'
import sertaoSideImg from '../../public/images/coffee/sertaoSide.jpg'
import sertaoBackImg from '../../public/images/coffee/sertaoBack.png'
import jinotegaImg from '../../public/images/coffee/jinotega.jpg'
import jinotegaFrontImg from '../../public/images/coffee/jinotegaFront.png'
import jinotegaSideImg from '../../public/images/coffee/jinotegaSide.png'
import jinotegaBackImg from '../../public/images/coffee/jinotegaBack.png'
import niglaImg from '../../public/images/coffee/nigla.jpg'
import niglaFrontImg from '../../public/images/coffee/niglaFront.png'
import niglaSideImg from '../../public/images/coffee/niglaSide.png'
import niglaBackImg from '../../public/images/coffee/niglaBack.png'
// MerchandiseImages:
import bialettiMokaExpress150Img from '../../public/images/merchandise/bialettiMokaExpress150.jpg'
import hariov6002Img from '../../public/images/merchandise/hario-v60-02.jpg'
import harioRangeServerV6002Img from '../../public/images/merchandise/harioRangeServerV60-02.jpg'
import bialettiVenusImg from '../../public/images/merchandise/bialettiVenus.jpg'
import filterHarioV6002Img from '../../public/images/merchandise/filterHarioV60-02.jpg'
import harioTeaPressImg from '../../public/images/merchandise/harioTeaPress.jpg'
import temperMottaImg from '../../public/images/merchandise/temperMotta.jpg'
import bialettiFrenchPress1000Img from '../../public/images/merchandise/bialettiFrenchPress1000.jpg'
import bialettiMokaExpress300Img from '../../public/images/merchandise/bialettiMokaExpress300.jpg'
import bialettiFrenchPress350Img from '../../public/images/merchandise/bialettiFrenchPress350.jpg'
import baristaSpaceImg from '../../public/images/merchandise/baristaSpace.jpg'
import fellowStaggKettleImg from '../../public/images/merchandise/fellowStaggKettle.jpg'

const data = {
  coffee: [
    {
      _id: 'c1',
      url: 'murue-kavutiri-kenia',
      title: 'Murue Kavutiri | Kenia',
      flavor: 'wild rose | buckwheat honey | rhubarb',
      category: 'coffee',
      images: [
        mureaKavutiriImg,
        mureaKavutiriFrontImg,
        mureaKavutiriSideImg,
        mureaKavutiriBackImg,
      ],
      region: 'EMBU',
      variety: 'SL28 | SL34 | RUIRU 11 | BATIAN',
      roast: 'BLONDE',
      scaScroe: '86.75',
      description: [
        'Someone waited for grains in a light, airy and pleasant version? There you go, here they are! A hot cake with rhubarb and rosehip tea sweetened with a spoonful of honey. Sounds like heaven on a tongue, right? Just a sip and ... you will be gone.',
        'Great for pouring, perfect on ice - just perfect for your grinder!',
      ],
      price250g: 16,
      price500g: 30,
    },
    {
      _id: 'c2',
      url: 'la-joya-salwador',
      title: 'La Joya | Salwador',
      flavor: 'cranberries | hazelnut | dessert chocolate',
      category: 'coffee',
      images: [laJoyaImg, laJoyaFrontImg, laJoyaSideImg, laJoyaBackImg],
      region: 'APANECA',
      variety: 'BOURBON',
      roast: 'MEDDIUM',
      scaScroe: '83',
      description: [
        'The sea of coffee is behind you, and you are still looking for the only one? Here she is! The sweetness of chocolate with a hint of hazelnut in the background is a good start. And each sip leads to the intense cranberry side. Unpredictable, unconventional, original. How would you describe a cup of your new favorite coffee?',
        'These grains are a real chameleon. Delicious as a little black, and if you like to break patterns, check out the overflow methods.',
      ],
      price250g: 13,
      price500g: 24,
    },
    {
      _id: 'c3',
      url: 'serato-brazylia',
      title: 'Sertão | Brazylia',
      flavor: 'dried plum | dessert chocolate | roasted almonds',
      category: 'coffee',
      images: [sertaoImg, sertaoFrontImg, sertaoSideImg, sertaoBackImg],
      region: 'CARMO DE MINAS',
      variety: 'RED BOURBON',
      roast: 'MEDDIUM',
      scaScroe: '83.5',
      description: [
        `The classic at its best. This is something for people who like "bitter coffee, but not too much", "a little sweetness, but not too much", "something gentle, but please don't bring me a dishwater". Bittersweet, like a stormy romance in a Brazilian soap opera - it is thanks to dark chocolate. The dried plum is a surprising twist here that no one would ever expect, and it is always there to come. Finally, a delightful taste of toasted almonds. And the pleasure lasts through thousands of episodes ... or until the end of the package.`,
        'It fits perfectly in an espresso machine, it will work well in milk coffees, it will also dominate black, home classics.',
      ],
      price250g: 10,
      price500g: 18,
    },
    {
      _id: 'c4',
      url: 'jinotega-nikaragua',
      title: 'Jinotega | Nikaragua',
      flavor: 'red apple | cardamom | cocoa',
      category: 'coffee',
      images: [jinotegaImg, jinotegaFrontImg, jinotegaSideImg, jinotegaBackImg],
      region: 'JINOTEGA',
      variety: 'TYPICA | CATURRA | BOURBON',
      roast: 'MEDDIUM',
      scaScroe: '82.75',
      description: [
        `The obvious solution to monday morning's non-obvious problems. It won't help you find that goddamn second sock, but it will deliciously motivate you to look for it! Cardamom and red apple? The couple may be controversial, but intriguing. And cocoa to convince even the unconvinced. Great solo, perfect with a second breakfast, perfect for a Sunday cake.`,
        'Of course - for an espresso machine and a coffee maker.',
      ],
      price250g: 11,
      price500g: 20,
    },
    {
      _id: 'c5',
      url: 'ngila-tanzania',
      title: 'Ngila | Tanzania',
      flavor: 'pink grapefruit | cedar | caramel',
      category: 'coffee',
      images: [niglaImg, niglaFrontImg, niglaSideImg, niglaBackImg],
      region: 'KARATU - NGILA ESTATE',
      variety: 'BOURBON',
      roast: 'BLONDE',
      scaScroe: '85',
      description: [
        `We don't mind simplicity, and we love it, but every now and then it's worth breaking the routine. If madness is in your blood, you've come to the right place! In these grains, the pink grapefruit plays the first fiddle, which is the perfect dose of bitterness, sweetness and refreshment. And that's not over yet! The character is added by a deep cedar note that breaks the monopoly of the aforementioned grapefruit, and he has it all in common - the king of sweets, caramel.`,
        'How to brew? Try the overflow methods for a good start, and then ... just go crazy!',
      ],
      price250g: 14,
      price500g: 26,
    },
  ],
  merchandise: [
    {
      _id: 'm1',
      url: 'bialetti-moka-express-150-ml',
      images: [bialettiMokaExpress150Img],
      title: 'Bialetti Moka Express 150ml',
      category: 'merchandise',
      description: [
        'Durable aluminum body.',
        'Up to three cups of espresso at the same time - total capacity: 150 ml.',
        'Classic shape.',
        'For both gas and electric burners.',
      ],
      price: 27,
    },
    {
      _id: 'm2',
      url: 'hario-v60-02-dripper',
      images: [hariov6002Img],
      title: 'Hario v60-02 Dripper',
      category: 'merchandise',
      description: [
        'Ceramic dripper.',
        'Conical form with grooves for perfect water flow.',
        'Great temperature keeping.',
        'Perfect with Hario Range Server V60-02.',
        'Up to 600 ml of infusion at the same time.',
      ],
      price: 24,
    },
    {
      _id: 'm3',
      url: 'hario-range-server-v60-02',
      images: [harioRangeServerV6002Img],
      title: 'Hario Range Server v60-02',
      category: 'merchandise',
      description: [
        'Jug made of Japanese, high-temperature glass.',
        'Perfect with the Hario V60-02 dripper.',
        'Glass lid with silicone coating.',
        'Capacity for four cups - up to 600 ml.',
      ],
      price: 29,
    },
    {
      _id: 'm4',
      url: 'bialetti-venus-300-ml',
      images: [bialettiVenusImg],
      title: 'Bialetti Venus 300ml',
      category: 'merchandise',
      description: [
        'Polished stainless steel body.',
        'Up to six cups of espresso at the same time - total capacity: 300 ml.',
        'Modern design.',
        'For gas, electric and induction burners.',
        'For gas, electric and induction burners.',
      ],
      price: 39,
    },
    {
      _id: 'm5',
      url: 'hario-v60-02-misarashi-filters',
      images: [filterHarioV6002Img],
      title: 'Hario v60-02 Misarashi',
      category: 'merchandise',
      description: [
        'Made of unbleached paper.',
        'Perfect for the Hario V60-02 dripper.',
        '100 pieces per package.',
      ],
      price: 8,
    },
    {
      _id: 'm6',
      url: 'hario-tea-press-olive-wood-300-ml',
      images: [harioTeaPressImg],
      title: 'Hario Tea Press 300ml',
      category: 'merchandise',
      description: [
        'Stainless steel, olive wood and Japanese glass.',
        'Modern design.',
        'A simple way to make great coffee and tea.',
        'Capacity for about two cups.',
      ],
      price: 44,
    },
    {
      _id: 'm7',
      url: 'tamper-motta',
      images: [temperMottaImg],
      title: 'Temper Motta',
      category: 'merchandise',
      description: [
        'Flat stainless steel base.',
        'Contoured wooden handle.',
        'Diameter: 54 mm.',
      ],
      price: 27,
    },
    {
      _id: 'm8',
      url: 'bialetti-french-press-signature-1000-ml',
      images: [bialettiFrenchPress1000Img],
      title: 'Bialetti French Press Signature 1000ml',
      category: 'merchandise',
      description: [
        '18/10 stainless steel, glass and plastic.',
        'Classic design.',
        'A simple way to make great coffee and tea.',
        'Capacity for about six cups.',
        'Dishwasher safe.',
      ],
      price: 33,
    },
    {
      _id: 'm9',
      url: 'bialetti-moka-express-300-ml',
      images: [bialettiMokaExpress300Img],
      title: 'Bialetti Moka Express 300ml',
      category: 'merchandise',
      description: [
        'Durable aluminum body.',
        'Up to six cups of espresso at the same time - total capacity: 300 ml.',
        'Classic shape.',
        'For both gas and electric burners.',
      ],
      price: 36,
    },
    {
      _id: 'm10',
      url: 'bialetti-french-press-signature-350-ml',
      images: [bialettiFrenchPress350Img],
      title: 'Bialetti French Press Signature 350ml',
      category: 'merchandise',
      description: [
        '18/10 stainless steel, glass and plastic.',
        'Classic design.',
        'A simple way to make great coffee and tea.',
        'Capacity for about two cups.',
        'Dishwasher safe.',
      ],
      price: 26,
    },
    {
      _id: 'm11',
      url: 'barista-space-hand-grinder-silver',
      images: [baristaSpaceImg],
      title: 'Barista Space Hand Grinder',
      category: 'merchandise',
      description: [
        'Stable burrs made of stainless steel.',
        'Greater grinding precision and even grinding compared to ceramic burr mills.',
        'Aluminum body and container for ground coffee.',
        'Convenient grinding adjustment knob with numerical scale.',
        'Rubber band for a secure grip.',
        'The handle is finished with a wooden element.',
        'Practical cover for easy travel and a brush for cleaning.',
        'Up to 18 g of beans in the grinder at a time.',
      ],
      price: 97,
    },
    {
      _id: 'm12',
      url: 'fellow-stagg-kettle-white',
      images: [fellowStaggKettleImg],
      title: 'Fellow Stagg Kettle',
      category: 'merchandise',
      description: [
        'Stainless steel body and cover.',
        'Weighted handle for increased stability while pouring.',
        'Precise and repeatable coffee brewing thanks to the profiled spout.',
        'Modern, minimalist design.',
        'Built-in thermometer.',
        'Large capacity - 1000 ml.',
      ],
      price: 85,
    },
  ],
}

export default data
