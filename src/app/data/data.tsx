import { CiGlobe } from "react-icons/ci";
import { BiBarChartAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { SiSpringsecurity } from "react-icons/si";
import { BsFingerprint } from "react-icons/bs";
import woman from '../../../public/woman.jpg'
import woman1 from '../../../public/woman1.jpg'
import woman2 from '../../../public/woma2.jpg'
import woman3 from '../../../public/woman3.jpg'
import woman5 from '../../../public/woma5.jpg'
import web1 from '../../../public/web1.png'
import web2 from '../../../public/image2.png'
import web3 from '../../../public/web4.png'


const Info = {
    nav : [
        { id: 1 , name: 'Home' , link:'/' } ,
        { id: 2 , name: 'Company' , link:'/Company'} ,
        { id: 3 , name: 'Resources' , link:'/Resources'} ,
        { id: 4 , name: 'Contact' , link:'/Contact'} 
    ] ,
    gate: 'Your Gateway to Web3 & Blockchain Innovation.' ,
    mission:'As the digital landscape continues to evolve, our mission is to empower individuals and businesses alike with decentralized solutions that revolutionize.' ,
    tool:'Powering tools and integrations from companies all around the world' ,
    chainText:'Developing Blockchain Solutions for Your Needs' ,
    blockchain:[
        { id: 1 , title:'Scalable' , text:'The scalable blockchain market refers to the segment of the blockchain industry that focuses on developing.' , icon: CiGlobe } ,
        { id: 2 , title:'Decentralized' , text:'Sharding involves partitioning the blockchain network into smaller groups called shards.' , icon: BiBarChartAlt }
    ] ,
    smart:'Smart Contracts Development' ,
    network:'Integration with existing blockchain networks' ,
    smartText:'We design and develop smart contracts tailored to your requirements, ensuring that they accurately reflect the terms of your agreement and adhere to best practices in coding and security.' ,
    advisory:'Blockchain Consulting & Advisory' ,
    advisoryText:`Whether you're building on Ethereum, Binance Smart Chain, or another blockchain platform, we have the expertise to seamlessly integrate smart contracts into your chosen network, ensuring .`,
    adoption:'Strategy formulation for blockchain adoption' ,
    data:'Blockchain Security Solutions' ,
    data1:'Immutable data storage and encryption services' ,
    dataText:'Our smart contracts are programmed to automatically execute predefined actions when specific conditions are met, streamlining processes and reducing the need for manual intervention.' ,
    nothing:'Nothing great is made alone' ,
    value:'Upholding Values That Define Us' ,
    scale:[
        { id: 1 , title:'Scalable' , text:'Save money, scale smoothly, and animate your company.' , icon:BiBarChartAlt  } ,
        { id: 2 , title:'Transparency' , text:'Committing to transparency inoperations, transactions.' , icon:IoEyeSharp  } ,
        { id: 3 , title:'Security' , text:'Cut expenses, expand seamlessly, and energize your enterprise.' , icon:SiSpringsecurity  } ,
        { id: 4 , title:'Ethical Conduct' , text:'Minimize expenses, expand with ease, and enliven your business.' , icon:BsFingerprint } ,
    ] ,
    client:'What Our Clients Have to Say',
    marquee: [
        { id: 1 , name: 'Marie curie' , text:`“Unparalleled expertise in blockchain technology.”` , founder:'Co-founder, Solana' , image: woman } ,
        { id: 2 , name: 'Jonnie Hallman' , text:`“Web3bit continues to amaze me everyday.”` , founder:'Co-founder, Master Card' , image: woman5 } ,
        { id: 3 , name: 'Richard Feynman' , text:`“game-changer for our industry!”` , founder:'Co-founder, Tezos' , image: woman3 } ,
        { id: 4 , name: 'Gregor Mendel' , text:`“Innovative solutions that exceed expectations!”` , founder:'Co-founder, Tezos' , image: woman2 } ,
        { id: 5 , name: 'Hedy Lamarr' , text:`“Revolutionized our digital landscape!”` , founder:'Co-founder, Compound' , image: woman1 } ,
    ] ,
    latest: 'Stay Update with Latest in Web3' ,
    web3: [
        { id: 1 , title:"Power and Potential of Blockchain Technology" , date:'June 15, 2024' , image: web1 , read: 'Read More' , text: 'Take the first step towards embracing the transformative power of Web3 and blockchain technology.'} ,
        { id: 2 , title:"Revolutionizing Virtual Asset Management" , date:'June 20, 2024' , image: web2 , read: 'Read More' , text:' Take the first step toward experiencing the groundbreaking impact of Web3 and blockchain technology.' } ,
        { id: 3 , title:"Harnessing the Power of Blockchain Technology" , date:'June 25, 2024' , image: web3 , read: 'Read More' , text:'Embark on your path to explore the transformative benefits of Web3 and blockchain technology.'} ,
    ]
}


export default Info;