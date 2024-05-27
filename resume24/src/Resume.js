import React from 'react';

function Resume({name,phone, email, link}) {
    return (
        <div >
            <div id="title1" style={{display:"flex"}}>
                <div >
                    <h1 style={{ color: 'darkblue', marginBottom: "-10px" }}>{name}</h1>
                    <h4 style={{ color: 'lightblue',marginLeft:"5px", marginBottom: "10px" }}>Senior Product Manager</h4>
                    <div style={{margin:"5px", display:"flex"}}>
                        <div className="subsection left" style={{marginRight:"50px"}}>{phone}</div>
                        <div style={{marginRight:"50px"}}><a href="#">@ {email}</a></div>
                        <br></br>
                        <div>
                        <a href="#">{link}</a></div>
                        </div>
                    
                </div>
                <div style={{position:"absolute", left:"81%",top:"2%"}}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HdIHwvHxGvZlmlndxbddp_KaCi9WIeCoCA&usqp=CAU' style={{borderRadius:"50%", height:"150px", width:"150px"}}></img>
                </div>
            </div>
            <div id="container" style={{ display: 'flex'}}>
                <div id="left" style={{ flex: 1, padding: '20px' }}>
                    <div className="section">
                        <h2 style={{ color: 'blue',marginBottom: "-25px"  }}>Summary</h2>
                        <p style={{ color: 'blue' }}>_________________________________________________________</p>
                        <p className="subsection">Use this opportunity to intrigue and draw the recruiter further into your resume. With your resume summary, you'll help them get a quick overview of your know-how, experience, skill set and results</p>
                    </div>
                    <div className="section">
                        <h2 style={{ color: 'blue',marginBottom: "-25px" }}>Experience</h2>
                        <p style={{ color: 'blue' }}>_________________________________________________________</p>
                   
                        <h3 className="subsection" style={{ color: 'blue', marginTop:"-15px"}}>Managing Director </h3>
                        <h4 style={{marginTop:"-5px",color:"cyan"}}>Vortex Solar</h4>
                        <p style={{marginTop:"-15px"}}>● 2018-Ongoing</p>
                        <p style={{marginTop:"-15px"}}>● Jacksonville, Florida</p>
                        <p style={{marginTop:"-15px"}}>● Doubled the total sales volume and recapitalized the company within 3 years</p>
                        <p style={{marginTop:"-15px"}}>● Executed a global restructuring and cost-cutting process reducing the operating fixed costs by 35% Masterminded investigation to detect and remove corporate embezzler, thus recaptured $1</p>
                        <h3 className="subsection" style={{ color: 'blue', marginTop:"15px"}}>Founder and Managing Director</h3>
                        <h4 style={{color :"cyan"}}>Waters and Sons</h4>
                        <p>● Jacksonville, Florida</p>
                        <p>● Established and grew business to £500k+ turnover in 3 years</p> 
                        <p>● Participated in developing policy and strategic plans that provided direction and structure for 5 operating units</p> 
                        <p>● Responsible for the marketing strategy: Product development, PR & Media Relations, Google Ads, Facebook Ads Manger, Email Marketing, SEO, Leaders Marketing, Social Media Marketing, Customer Service, Business Development</p>
                        <p>● Successfully sold the company in 2017-it has already served more than 13 000 customers</p>

                        <h3 className="subsection" style={{ color: 'blue', marginTop:"15px"}}>Managing Director</h3>
                        <h4 style={{color :"cyan"}}>Waters and Sons</h4>
                        <p>● Jacksonville, Florida</p>
                        <p>● Established and grew business to £500k+ turnover in 3 years</p> 
                        <p>● Participated in developing policy and strategic plans that provided direction and structure for 5 operating units</p> 
                        <p>● Responsible for the marketing strategy: Product development, PR & Media Relations, Google Ads, Facebook Ads Manger, Email Marketing, SEO, Leaders Marketing, Social Media Marketing, Customer Service, Business Development</p>
                        <p>● Successfully sold the company in 2017-it has already served more than 13 000 customers</p>
                    </div>
                </div>
                <div id="right" style={{ display:"inline",flex: 1, padding: '20px' }}>
                    <div className="section">
                        <h2 style={{color :"blue" ,marginTop:"15px"}}>Education</h2>
                        <p style={{color :"blue" ,marginTop:"-35px"}}>_________________________________________________________</p>
                        <h3 style={{color:"blue"}}>Associate Member of CIPS</h3>
                        <h4 style={{color:"cyan"}}>Chartered Insitute of Purchasing and Supply</h4>
                        <p>2010-2011</p>
                    </div>
                    <div className="section">
                        <h2 style={{color :"blue" ,marginTop:"15px"}}>Additional Experience</h2>
                        <p style={{color :"blue" ,marginTop:"-35px"}}>_________________________________________________________</p>
                        <h3 style={{color:"blue"}}>Deputy General Manager</h3>
                        <h4 style={{color:"cyan"}}>Boyle & Anderson P.C.</h4>
                        <p>● Led the team of 3 to 5 audit staff in performing internal audits and forensic reviews for retail branch
                            banking</p> 
                            <p>● Planned a stock take with a wage saving of 20%</p>
                            <p>● Honored to lead a multi-cultural team of 70 talented individuals</p>
                    </div>
                    <div className="section">
                        <h2 style={{color :"blue" ,marginTop:"15px"}}>Investment Analyst</h2>
                        <h3 style={{color :"cyan" ,marginTop:"15px"}}>Funimation</h3>
                        <p style={{margin:"-10px"}}>● 2007-2008 Jacksonville, Florida</p>
                        <p style={{marginBottom:"-10px"}}>● Created 18 page financial workbook including all statement for investor funding</p>
                        <p style={{}}>● Developed the investor deck used to raise 3 million in seed funding</p>    
                        <p style={{margin:"-10px"}}>● Worked on 60+ deals on aspects such as industry research, due diligence, financial modeling, legal agreements, valuation and investor presentations</p> 
                        <p style={{}}>● Automated functional testing of the investment. banking interface by developing shell scripts, reducing man-hour requirements by 60%</p>
                    </div>
                </div>
                <div  style={{  flex: 1, padding: '20px' }}>
                    <div className="section">
                        <h2 style={{ color: 'blue',marginBottom: "-25px"  }}>Strengths</h2>
                        <p style={{ color: 'blue'  }}>_________________________________________________________</p>
                        <h3 style={{color:"blue"}}>Learn and be Curious</h3>
                        <p>seeking to improve myself. Curious about new possibilities and taking action to explore them.</p>
                        <h3 style={{color:"blue"}}>Earning Trust of Others</h3>
                        <p>Listen attentively, speak candidly, and treat others respectfully.</p>
                        <h3 style={{color:"blue"}}>Love for the Industry</h3>
                        <p>Doing my job with great love and passion helps me stay motivated at all times.</p>
                    </div>
                    <div className="section">
                        <h2 style={{ color: 'blue',marginBottom: "-25px"  }}>Skills</h2>
                        <p>_________________________________________________________</p>
                        <h3 style={{color:"blue"}}>Financial Projections</h3>
                        <h3 style={{color:"blue"}}>Accounting</h3>
                        <h3 style={{color:"blue"}}>Office Management</h3>
                        <h3 style={{color:"blue"}}>Business and Enterprise Law</h3>
                        <h3 style={{color:"blue"}}>Operations</h3>
                    </div>
                    <div className="section">
                        <h2 style={{ color: 'blue',marginBottom: "-25px"  }}>Industry Expertise</h2>
                        <p>_________________________________________________________</p>
                        <h3 style={{color:"cyan"}}>Consistency and Reliability</h3>
                        <h3 style={{color:"cyan"}}>Empathy and Sensitivity</h3>
                        <h3 style={{color:"cyan"}}>Mentoring and Coaching</h3>

                    </div>
                    <div className="section">
                        <h2 style={{ color: 'blue',marginBottom: "-25px"  }}>Language</h2>
                        <p style={{color:"blue"}}>_________________________________________________________</p>
                        <h4 style={{color : "blue"}}>English</h4>
                        <h4 style={{color : "blue"}}>Italian</h4>
                        <h4 style={{color : "blue"}}>French</h4>
                        <h4 style={{color : "blue"}}>German</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;