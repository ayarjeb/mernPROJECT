import React, { useState ,useEffect } from 'react';
import '../css/style.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import NavBar from '../components/NavBar'

function Cvprocess() {
    const loadState = (key, defaultValue) => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : defaultValue;
      };

      const [currentSection, setCurrentSection] = useState('personal');
      const [personalInfo, setPersonalInfo] = useState(() => 
        loadState('personalInfo', { fullName: '', jobTitle: '', email: '', phone: '', linkedIn: '' }))
      
      const [experiences, setExperiences] = useState(() => 
        loadState('experiences', [{ company: '', duration: '', description: '' }]));
      const [educations, setEducations] = useState(() => 
        loadState('educations', [{ school: '', degree: '', years: '' }]));
      const [skills, setSkills] = useState(() => loadState('skills', []));
      const [newSkill, setNewSkill] = useState('');
      const [errors, setErrors] = useState({});

      const [suggestedSkills] = useState(['JavaScript', 'React', 'Node.js', 'Python', 'HTML', 'CSS', 'Git']);
    
      // Personal Info Handler
      const handlePersonalChange = (e) => {
        setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
      };
        // Save to localStorage whenever state changes
  useEffect(() => localStorage.setItem('personalInfo', JSON.stringify(personalInfo)), [personalInfo]);
  useEffect(() => localStorage.setItem('experiences', JSON.stringify(experiences)), [experiences]);
  useEffect(() => localStorage.setItem('educations', JSON.stringify(educations)), [educations]);
  useEffect(() => localStorage.setItem('skills', JSON.stringify(skills)), [skills]);

   // Validation rules
   const validateSection = () => {
    const newErrors = {};
    
    if (currentSection === 'personal') {
      if (!personalInfo.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!/^\S+@\S+\.\S+$/.test(personalInfo.email)) newErrors.email = 'Invalid email address';
    }
    
    if (currentSection === 'experience') {
      experiences.forEach((exp, index) => {
        if (!exp.company.trim()) newErrors[`experience-${index}-company`] = 'Company name is required';
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation handler with validation
  const handleNavigation = (nextSection) => {
    if (!validateSection()) return;
    setCurrentSection(nextSection);
  };
    
      // Experience Handlers
      const handleExperienceChange = (index, e) => {
        const newExperiences = [...experiences];
        newExperiences[index][e.target.name] = e.target.value;
        setExperiences(newExperiences);
      };
    
      const addExperience = () => {
        setExperiences([...experiences, { company: '', duration: '', description: '' }]);
      };
    
      // Education Handlers
      const handleEducationChange = (index, e) => {
        const newEducations = [...educations];
        newEducations[index][e.target.name] = e.target.value;
        setEducations(newEducations);
      };
    
      const addEducation = () => {
        setEducations([...educations, { school: '', degree: '', years: '' }]);
      };
    
      // Skills Handlers
      const handleSkillInput = (e) => {
        setNewSkill(e.target.value);
      };
    
      const addSkill = () => {
        if (newSkill.trim() && !skills.includes(newSkill.trim())) {
          setSkills([...skills, newSkill.trim()]);
          setNewSkill('');
        }
      };
    
      const addSuggestedSkill = (skill) => {
        if (!skills.includes(skill)) {
          setSkills([...skills, skill]);
        }
      };

      
  // PDF Export
  const handleExportPDF = () => {
    const input = document.getElementById('preview-section');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      // first page:
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      //subsequent pages:
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`${personalInfo.fullName || 'cv'}.pdf`);
    });
  };


  // Clear all data
  const handleClearAll = () => {
    localStorage.clear();
    setPersonalInfo({ fullName: '', jobTitle: '', email: '', phone: '', linkedIn: '' });
    setExperiences([{ company: '', duration: '', description: '' }]);
    setEducations([{ school: '', degree: '', years: '' }]);
    setSkills([]);
  };
    
      return (
       <>
       <NavBar></NavBar>
        <div  style={{marginTop : '80px'}}  className="cv-container">
          <div className="form-section">
            <div className="navigation">
              <button className={currentSection === 'personal' ? 'active' : ''} 
            onClick={() => setCurrentSection('personal')}>Personal</button>
              <button className={currentSection === 'experience' ? 'active' : ''} 
            onClick={() => setCurrentSection('experience')}>Experience</button>
              <button  className={currentSection === 'education' ? 'active' : ''} 
            onClick={() => setCurrentSection('education')}>Education</button>
              <button className={currentSection === 'skills' ? 'active' : ''} 
            onClick={() => setCurrentSection('skills')}>Skills</button>
            </div>
    
            {currentSection === 'personal' && (
              <div className="personal-form">
                <h2>Personal Information</h2>
                <h3>Full Name</h3>
                <input name="fullName" placeholder="Full Name" value={personalInfo.fullName} onChange={handlePersonalChange} />
                {errors.fullName && <span className="error">{errors.fullName}</span>}

                <h3> Job Title </h3>
                <input name="jobTitle" placeholder="Job Title" value={personalInfo.jobTitle} onChange={handlePersonalChange} />
                <h3>Email</h3>
                <input name="email" placeholder="Email" value={personalInfo.email} onChange={handlePersonalChange} />
                <h3>Phone</h3>
                <input name="phone" placeholder="Phone" value={personalInfo.phone} onChange={handlePersonalChange} />
                <h3>LinkedIn</h3>
                <input name="linkedIn" placeholder="LinkedIn" value={personalInfo.linkedIn} onChange={handlePersonalChange} />
                <button className="btn-primary" onClick={() => setCurrentSection('experience')}>Next</button>
              </div>
            )}
    
            {currentSection === 'experience' && (
              <div className="experience-form">
                <h2>Work Experience</h2>
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-entry">
                    
                    <h3>company</h3>
                    <input name="company" placeholder="Company" value={exp.company} 
                      onChange={(e) => handleExperienceChange(index, e)} />
                      <h3>Duration</h3>
                    <input name="duration" placeholder="Duration" value={exp.duration} 
                      onChange={(e) => handleExperienceChange(index, e)} />
                      <h3>Description</h3>
                    <textarea name="description" placeholder="Description" value={exp.description} 
                      onChange={(e) => handleExperienceChange(index, e)} />
                  </div>
                ))}
                <button onClick={addExperience}>Add Another Experience</button>
                <button onClick={() => setCurrentSection('education')}>Next</button>
              </div>
            )}
    
            {currentSection === 'education' && (
              <div className="education-form">
                <h2>Education</h2>
                {educations.map((edu, index) => (
                  <div key={index} className="education-entry">
                    <h3>School/University</h3>
                    <input name="school" placeholder="School/University" value={edu.school} 
                      onChange={(e) => handleEducationChange(index, e)} />
                      <h3>Degree</h3>
                    <input name="degree" placeholder="Degree" value={edu.degree} 
                      onChange={(e) => handleEducationChange(index, e)} />
                      <h3>Years</h3>
                    <input name="years" placeholder="Years" value={edu.years} 
                      onChange={(e) => handleEducationChange(index, e)} />
                  </div>
                ))}
                <button onClick={addEducation}>Add Another Education</button>
                <button onClick={() => setCurrentSection('skills')}>Next</button>
              </div>
            )}
    
            {currentSection === 'skills' && (
              <div className="skills-form">
                <h2>Skills</h2>
                <div className="skill-input">
                  <input value={newSkill} onChange={handleSkillInput} placeholder="Add skill" />
                  <button onClick={addSkill}>Add</button>
                </div>
                <div className="suggested-skills">
                  {suggestedSkills.map((skill, index) => (
                    <button key={index} onClick={() => addSuggestedSkill(skill)}>
                      {skill}
                    </button>
                  ))}
                </div>
                <div className="current-skills">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
      </div>
      {/* ******************************* */}
      
      <div className="actions">
          <button className="btn-secondary" onClick={handleClearAll}>
            Clear All Data
          </button>
          <button className="btn-primary" onClick={handleExportPDF}>
            Export as PDF
          </button>
        </div>
        {/* ******************************* */}
        <div id="preview-section" className="preview-section ats-style">
          <header>
            <h1 className="name">{personalInfo.fullName}</h1>
            <h2 className="job-title">{personalInfo.jobTitle}</h2>
            <div className="contact-info">
              <p>{personalInfo.email} | {personalInfo.phone}</p>
              {personalInfo.linkedIn && <p>LinkedIn: {personalInfo.linkedIn}</p>}
            </div>
          </header>

          <section className="professional-experience">
            <h3>PROFESSIONAL EXPERIENCE</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <h4>{exp.company}</h4>
                <p className="duration">{exp.duration}</p>
                <ul className="description">
                  {exp.description.split('\n').map((line, i) => (
                    line.trim() && <li key={i}>{line.trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="education">
            <h3>EDUCATION</h3>
            {educations.map((edu, index) => (
              <div key={index} className="education-item">
                <h4>{edu.school}</h4>
                <p>{edu.degree} | {edu.years}</p>
              </div>
            ))}
          </section>

          <section className="skills">
            <h3>SKILLS</h3>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
         
        </div>
      <div/>
      <div/>
    </>
  );
}

export default Cvprocess;
