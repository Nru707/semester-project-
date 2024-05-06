import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { GoTriangleRight } from "react-icons/go";


const Navigation=()=>{

    const [isopenSidebarVal, setisopenSidebarVal] = useState(true);
    return(
        <>
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 part1'>{/*col-sm-3 */}
                        <div className='cat'>{/*Category wrapper........menu button */}
                        <Button className='category' onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}><IoMenu /></Button>
                        <div className ={`sidebarNav ${isopenSidebarVal===true ? 'open' : ''}`}>
                                        <ul>
                                        <li><Link to="/"><Button>Electronics <GoTriangleRight className='ml-auto' /></Button> </Link>
                                        <div className='submenu'>
                                            <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>

                                            </div></li>
                                        <li><Link to="/"><Button>Grocery<GoTriangleRight className='ml-auto' /></Button>  </Link>
                                        <div className='submenu'>
                                        <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>

                                            </div></li>
                                        <li><Link to="/"><Button>Health <GoTriangleRight className='ml-auto' /></Button> </Link>
                                        <div className='submenu'>
                                        <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>

                                            </div></li>
                                        <li><Link to="/"><Button>Books <GoTriangleRight className='ml-auto' /></Button></Link>
                                        <div className='submenu'>
                                        <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>

                                            </div></li>
                                        <li><Link to="/"><Button>Clothes<GoTriangleRight className='ml-auto' /></Button>  </Link>
                                        <div className='submenu'>
                                        <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>

                                            </div></li>
                                        <li><Link to="/"><Button>footware</Button>  </Link></li>
                                        <li><Link to="/"><Button>Cosmatic</Button>  </Link></li>
                                        <li><Link to="/"><Button>Beauty</Button>  </Link></li>
                                        <li><Link to="/"><Button>shell</Button>  </Link></li>
                                        <li><Link to="/"><Button>Trands</Button>  </Link></li>
                                        </ul>
                        </div>
                    </div>
             </div>

                    <div className='col-sm-9 part2 d-flex align-items-center'>
                        <ul className='list list-inline '>
                            <li className='list-inline-item'><Link to="/"> Electronics </Link>
                                <div className='submenu shadow'>
                                         <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>
                                </div>
                            
                            
                            </li>
                            <li className='list-inline-item'><Link to="/"> Grocery </Link>
                            <div className='submenu shadow'>
                                         <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"> Health </Link>
                            
                            <div className='submenu shadow'>
                                         <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>
                                </div></li>
                            <li className='list-inline-item'><Link to="/"> Books </Link>
                            <div className='submenu shadow'>
                                         <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"> Clothes </Link>
                            <div className='submenu shadow'>
                                         <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'> <Link to="/"> footware </Link>
                            
                            <div className='submenu shadow'>
                                         <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'> <Link to="/"> Cosmatic </Link>
                            <div className='submenu shadow'>
                                         <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"> Beauty </Link>
                            <div className='submenu shadow'>
                                         <Link to="/"><Button> Mobiles</Button></Link>
                                         <Link to="/"><Button> Laptop</Button></Link>
                                         <Link to="/"><Button> KeyBoards</Button></Link>
                                         <Link to="/"><Button> Headphones</Button></Link>
                                         <Link to="/"><Button> WaterCooler</Button></Link>
                                         <Link to="/"><Button> Pendrive</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"> shell </Link>
                            </li>
                            <li className='list-inline-item'><Link to="/"> Trands </Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
        </>
    )
    
}
export default Navigation;