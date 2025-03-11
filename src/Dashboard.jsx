import React, { useState } from 'react';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    affiliation: '',
    country: '',
    researcherLevel: '',
    projectName: '',
    needsTeam: false,
    researchInterests: [],
    preferredMaterials: [],
    skills: [],
    collaborationPreferences: [],
    communicationMode: [],
    updatesPreferences: [],
    preferredLanguage: 'English',
    joinDiscussionGroup: false,
    appliedProjects: [],
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [completedForms, setCompletedForms] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  
  const researcherLevels = [
    'Undergraduate Student',
    'Master’s Student',
    'PhD Candidate',
    'Postdoctoral Researcher',
    'Industry Researcher',
    'Professor/Principal Investigator',
  ];
  const openResearchProjects = [
    'Quantum Computing for Optimization',
    'AI-Driven Drug Discovery',
    'Climate Change Modeling',
    'Smart City Infrastructure Development',
    'Blockchain for Healthcare',
    'CRISPR Gene Editing Research',
    'Autonomous Vehicle Navigation',
    'Neuroscience and AI Integration',
    'Sustainable Energy Solutions',
    'Space Exploration Technologies',
  ];

  const researchCategories = {
    "Fundamental Research": [
        'Quantum Computing',
        'Artificial Intelligence (AI)',
        'Computational Neuroscience',
        'Astrophysics',
        'Particle Physics',
        'Mathematics',
        'Theoretical Computer Science',
        'Genomics',
        'Cognitive Science'
    ],
    "Applied Research": [
        'Biomedical Engineering',
        'Climate Science',
        'Agricultural Technology (AgTech)',
        'Renewable Energy Systems',
        'Robotics',
        'Materials Science',
        'Nanotechnology',
        'Telecommunications',
        'Cybersecurity',
        'Drug Discovery',
        'Urban Planning'
    ],
    "Interdisciplinary Research": [
        'Data Science for Biology',
        'Environmental Policy',
        'Computational Linguistics',
        'Bioinformatics',
        'Sustainability Science',
        'Human-Computer Interaction (HCI)',
        'Neuroeconomics',
        'Digital Humanities',
        'Systems Biology',
        'Social Network Analysis'
    ],
    "Emerging Research Areas": [
        'Quantum Machine Learning',
        'Synthetic Biology',
        'Space Exploration Technologies',
        'Blockchain and Distributed Ledger Technologies',
        'Autonomous Systems',
        'Edge Computing',
        'Metaverse and Virtual Reality',
        'Gene Editing (CRISPR)',
        'Smart Cities',
        'Ethical AI'
    ],
    "Social Sciences and Humanities": [
        'Behavioral Economics',
        'Political Science',
        'Anthropology',
        'Sociology of Technology',
        'Philosophy of Mind',
        'Cultural Studies',
        'Education Technology (EdTech)',
        'Media Studies',
        'Psychology of Decision Making',
        'History of Science'
    ],
    "Health and Medicine": [
        'Precision Medicine',
        'Public Health Informatics',
        'Mental Health Research',
        'Immunology',
        'Epidemiology',
        'Regenerative Medicine',
        'Gerontology',
        'Global Health',
        'Healthcare Technology',
        'Nutritional Science'
    ]
};


const flattenedResearchInterests = Object.values(researchCategories).flat();

const researchMaterials = [
  'Peer-Reviewed Journals',
  'Conference Papers',
  'Technical Reports',
  'Blog Articles & Tutorials',
  'White Papers',
  'Online Courses',
  'Government Reports',
];

const researchSkills = [
  'Scientific Writing & Publishing',
  'Grant Writing & Funding Applications',
  'Peer Review Process & Ethics',
  'Open Data & Reproducibility',
  'Research Software & Tools (MATLAB, R, Python, etc.)',
  'Lab Management & Collaboration Tools',
];

const collaborationPreferences = [
  'I am looking for mentorship',
  'I want to collaborate on projects',
  'I am looking for funding/grant opportunities',
  'I am seeking industry partnerships',
  'I am interested in open-source research initiatives',
];

const communicationModes = [
  'Email Newsletters',
  'Online Workshops',
  'Research Webinars',
  'Community Forums & Slack Groups',
];

const updatesPreferences = [
  'Funding & Grants',
  'Conferences & Workshops',
  'Open Research Collaborations',
  'Research Software & Tools',
];

const languageOptions = ['English', 'Spanish', 'French', 'German', 'Chinese'];



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleMultiSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }));
  };

  const nextStep = () => {
    // Add current step to completed forms with summary data
    addCompletedForm();
    
    // Move to next step
    setCurrentStep((prev) => Math.min(prev + 1, 9));
  };
  
  const goToStep = (step) => {
    if (step >= 1 && step <= 9) {
      setCurrentStep(step);
      if (submitted) {
        setSubmitted(false);
      }
    }
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    addCompletedForm();
    setSubmitted(true);
  };

  const addCompletedForm = () => {
    const stepTitles = {
      1: 'Basic Information',
      2: 'Researcher Level',
      3: 'Research Interests',
      4: 'Preferred Materials',
      5: 'Research Skills',
      6: 'Collaboration',
      7: 'Communication',
      8: 'Additional Preferences',
      9: 'Open Projects'
    };

    const stepSummaries = {
      1: () => {
        return `${formData.fullName || 'No name'} • ${formData.email || 'No email'}`;
      },
      2: () => {
        return `${formData.researcherLevel || 'Not selected'} • ${formData.projectName || 'No project'}`;
      },
      3: () => {
        return `${formData.researchInterests.length} interests selected`;
      },
      4: () => {
        return `${formData.preferredMaterials.length} materials selected`;
      },
      5: () => {
        return `${formData.skills.length} skills selected`;
      },
      6: () => {
        return `${formData.collaborationPreferences.length} preferences selected`;
      },
      7: () => {
        return `${formData.communicationMode.length} modes selected`;
      },
      8: () => {
        return `Language: ${formData.preferredLanguage}`;
      },
      9: () => {
        return `${formData.appliedProjects.length} projects selected`;
      },
    };

    const stepColors = {
      1: 'bg-indigo-50 border-indigo-200',
      2: 'bg-blue-50 border-blue-200',
      3: 'bg-purple-50 border-purple-200',
      4: 'bg-green-50 border-green-200',
      5: 'bg-yellow-50 border-yellow-200',
      6: 'bg-red-50 border-red-200',
      7: 'bg-teal-50 border-teal-200',
      8: 'bg-gray-50 border-gray-200',
      9: 'bg-orange-50 border-orange-200',
    };

    // Only add if the step is valid and not already in completed forms
    if (currentStep >= 1 && currentStep <= 9) {
      const alreadyExists = completedForms.some(form => form.step === currentStep);
      
      if (alreadyExists) {
        // Update existing form
        setCompletedForms(prevForms => 
          prevForms.map(form => 
            form.step === currentStep 
              ? {
                  ...form,
                  summary: stepSummaries[currentStep](),
                }
              : form
          )
        );
      } else {
        // Add new form
        setCompletedForms(prevForms => [
          ...prevForms,
          {
            step: currentStep,
            title: stepTitles[currentStep],
            summary: stepSummaries[currentStep](),
            color: stepColors[currentStep],
          }
        ]);
      }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-indigo-800 mb-4">Basic Information</h3>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-indigo-700">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-indigo-200 rounded-md shadow-sm placeholder-indigo-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-indigo-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-indigo-200 rounded-md shadow-sm placeholder-indigo-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="affiliation" className="block text-sm font-medium text-indigo-700">
                Affiliation (University/Organization)
              </label>
              <input
                id="affiliation"
                name="affiliation"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-indigo-200 rounded-md shadow-sm placeholder-indigo-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.affiliation}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-indigo-700">
                Country/Region
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-indigo-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="USA">United States</option>
                <option value="India">India</option>
                <option value="UK">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-blue-800 mb-4">Researcher Level</h3>
            <label htmlFor="researcherLevel" className="block text-sm font-medium text-blue-700">
              Select Your Career Stage
            </label>
            <select
              id="researcherLevel"
              name="researcherLevel"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={formData.researcherLevel}
              onChange={handleChange}
            >
              <option value="">Select Level</option>
              {researcherLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            
            <div className="mt-4 mb-4">
              <label htmlFor="projectName" className="block text-sm font-medium text-blue-700">
                Project Name (Optional)
              </label>
              <input
                id="projectName"
                name="projectName"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-blue-200 rounded-md shadow-sm placeholder-blue-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="Enter your project name"
              />
            </div>

            <div className="mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="needsTeam"
                  checked={formData.needsTeam}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm font-medium text-blue-700">
                  I need a team to collaborate on this research
                </span>
              </label>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-purple-800 mb-4">Research Interests</h3>
            <p className="text-sm text-purple-600 mb-4">Select all topics you'd like to explore</p>
            {Object.entries(researchCategories).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h4 className="text-md font-medium text-purple-700 mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleMultiSelectChange('researchInterests', interest)}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                        formData.researchInterests.includes(interest)
                          ? 'bg-purple-200 text-purple-800 hover:bg-purple-300'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {interest}
                      {formData.researchInterests.includes(interest) && (
                        <span className="ml-1 text-xs">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

        case 4:
          return (
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-800 mb-4">Preferred Research Materials</h3>
              <p className="text-sm text-green-600 mb-4">Select the types of content you prefer</p>
              <div className="flex flex-wrap gap-2">
                {researchMaterials.map((material) => (
                  <button
                    key={material}
                    type="button"
                    onClick={() => handleMultiSelectChange('preferredMaterials', material)}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      formData.preferredMaterials.includes(material)
                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {material}
                    {formData.preferredMaterials.includes(material) && (
                      <span className="ml-1 text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          );
  
        case 5:
          return (
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-yellow-800 mb-4">Research Skills</h3>
              <p className="text-sm text-yellow-600 mb-4">Select the skills you want to develop</p>
              <div className="flex flex-wrap gap-2">
                {researchSkills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleMultiSelectChange('skills', skill)}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      formData.skills.includes(skill)
                        ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {skill}
                    {formData.skills.includes(skill) && (
                      <span className="ml-1 text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          );
  
        case 6:
          return (
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-red-800 mb-4">Collaboration Preferences</h3>
              <p className="text-sm text-red-600 mb-4">Indicate your collaboration interests</p>
              <div className="flex flex-wrap gap-2">
                {collaborationPreferences.map((preference) => (
                  <button
                    key={preference}
                    type="button"
                    onClick={() => handleMultiSelectChange('collaborationPreferences', preference)}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      formData.collaborationPreferences.includes(preference)
                        ? 'bg-red-100 text-red-800 hover:bg-red-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {preference}
                    {formData.collaborationPreferences.includes(preference) && (
                      <span className="ml-1 text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          );
  
        case 7:
          return (
            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-teal-800 mb-4">Communication Preferences</h3>
              <p className="text-sm text-teal-600 mb-4">How would you like to stay updated?</p>
              <div className="flex flex-wrap gap-2">
                {communicationModes.map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => handleMultiSelectChange('communicationMode', mode)}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      formData.communicationMode.includes(mode)
                        ? 'bg-teal-100 text-teal-800 hover:bg-teal-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {mode}
                    {formData.communicationMode.includes(mode) && (
                      <span className="ml-1 text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          );
  
        case 8:
          return (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Additional Preferences</h3>
              <div className="mb-4">
                <label htmlFor="preferredLanguage" className="block text-sm font-medium text-gray-700">
                  Preferred Language for Research Content
                </label>
                <select
                  id="preferredLanguage"
                  name="preferredLanguage"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                  value={formData.preferredLanguage}
                  onChange={handleChange}
                >
                  {languageOptions.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="joinDiscussionGroup" className="block text-sm font-medium text-gray-700">
                  Would you like to join a research discussion group?
                </label>
                <div className="mt-1">
                  <input
                    id="joinDiscussionGroup"
                    name="joinDiscussionGroup"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={formData.joinDiscussionGroup}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          );
  
          case 9:
    return (
      <div className="bg-orange-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-orange-800 mb-4">Open Research Projects</h3>
        <p className="text-sm text-orange-600 mb-4">
          Select the projects you'd like to apply for collaboration
        </p>
        <div className="flex flex-wrap gap-2">
          {openResearchProjects.map((project) => (
            <button
              key={project}
              type="button"
              onClick={() => handleMultiSelectChange('appliedProjects', project)}
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                formData.appliedProjects.includes(project)
                  ? 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {project}
              {formData.appliedProjects.includes(project) && (
                <span className="ml-1 text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  

      default:
        return (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Form Step {currentStep}</h3>
            <p>Please complete this section of the form.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-white mb-6">
          Researcher Registration
        </h2>
        
        {submitted ? (
          // Submission complete view with rectangular grid layout
          <div className="bg-white rounded-lg shadow-2xl p-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Form Submission Complete</h3>
              <p className="text-gray-600 mt-2">Thank you for completing the researcher interest form!</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {completedForms.sort((a, b) => a.step - b.step).map((form, index) => (
                <div
                  key={index}
                  className={`${form.color} p-4 rounded-lg shadow-md border cursor-pointer hover:shadow-lg transition-shadow`}
                  onClick={() => goToStep(form.step)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold">{form.title}</h4>
                    <span className="bg-white text-gray-700 rounded-full h-6 w-6 flex items-center justify-center text-xs">
                      {form.step}
                    </span>
                  </div>
                  <p className="text-sm opacity-80">{form.summary}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Form filling view with completed forms at bottom
          <div className="space-y-6">
            {/* Current form */}
            <div className="bg-white rounded-lg shadow-xl p-6">
              {renderStep()}
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  Previous
                </button>
                
                {currentStep < 9 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
            
            {/* Completed forms at bottom */}
            {completedForms.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Completed Sections  (Click to edit)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {completedForms.sort((a, b) => a.step - b.step).map((form, index) => (
                    <div
                      key={index}
                      className={`${form.color} p-3 rounded-lg shadow-sm border cursor-pointer hover:shadow-md transition-shadow`}
                      onClick={() => goToStep(form.step)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-sm">{form.title}</h4>
                        <span className="bg-white text-gray-700 rounded-full h-5 w-5 flex items-center justify-center text-xs">
                          {form.step}
                        </span>
                      </div>
                      <p className="text-xs opacity-80">{form.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;