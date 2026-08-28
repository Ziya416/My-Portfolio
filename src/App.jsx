import React from "react";
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin, FiCode, FiTerminal } from "react-icons/fi";
import { FaPython, FaJava, FaHtml5, FaCloud, FaBrain, FaRobot, FaChartBar } from "react-icons/fa";
import { 
  SiJavascript, SiFastapi, SiTensorflow, SiPandas, 
  SiGooglecloud, SiCplusplus, SiFlask, SiGit, 
  SiMysql, SiDocker 
} from "react-icons/si";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-[#FAFAFB] text-gray-800">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-4xl font-bold mb-4">Ziya Engineer</h1>

          <p className="text-lg text-gray-600 mb-6">
            Future-focused Computer Engineer skilled in Machine Learning,
            Generative AI, and orchestrating full-stack Data Science applications.
          </p>

          <div className="flex gap-4">
          <Icon icon={<Mail />} link="mailto:your.email@gmail.com" />
          <Icon icon={<FiLinkedin />} link="www.linkedin.com/in/ziya-engineer-6664a028b" />
          <Icon icon={<FiGithub />} link="https://github.com/Ziya416" />
          </div>
        </div>

        {/* SKILLS ICONS */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-center text-gray-700">Core Technologies</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            <SkillIcon icon={<FaPython size={30} className="text-[#3776AB]" />} label="Python" />
            <SkillIcon icon={<SiCplusplus size={30} className="text-[#00599C]" />} label="C / C++" />
            <SkillIcon icon={<FaJava size={30} className="text-[#f89820]" />} label="Java" />
            <SkillIcon icon={<FaHtml5 size={30} className="text-[#E34F26]" />} label="HTML/CSS" />
            <SkillIcon icon={<SiJavascript size={30} className="text-[#F7DF1E]" />} label="JavaScript" />
            
            <SkillIcon icon={<SiGooglecloud size={30} className="text-[#4285F4]" />} label="GCP" />
            <SkillIcon icon={<FaBrain size={30} className="text-purple-600" />} label="LLMs" />
            <SkillIcon icon={<FaRobot size={30} className="text-[#6366f1]" />} label="Agentic AI" />
            <SkillIcon icon={<SiTensorflow size={30} className="text-[#FF6F00]" />} label="TensorFlow" />
            <SkillIcon icon={<SiPandas size={30} className="text-[#150458]" />} label="Pandas" />
            
            <SkillIcon icon={<SiFastapi size={30} className="text-[#009688]" />} label="FastAPI" />
            <SkillIcon icon={<SiFlask size={30} className="text-black" />} label="Flask" />
            <SkillIcon icon={<SiMysql size={30} className="text-[#4479A1]" />} label="MySQL" />
            <SkillIcon icon={<SiDocker size={30} className="text-[#2496ED]" />} label="Docker" />
            <SkillIcon icon={<SiGit size={30} className="text-[#F05032]" />} label="Git" />
            
            <SkillIcon icon={<FiTerminal size={30} className="text-gray-700" />} label="Terminal" />
            <SkillIcon icon={<FaChartBar size={30} className="text-[#F2C811]" />} label="PowerBI" />
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10">
          Featured & Deployed Applications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Project
            title="JananiSetu"
            highlight
            image="/jananisetu.png"
            overview="An AI-powered maternal health intelligence platform designed to eliminate diagnostic delays in rural healthcare. By transforming fragmented, paper-based records into a centralized, bilingual decision support system, it ensures healthcare providers have real-time access to crucial patient history during high-risk deliveries."
            tech="Python, JavaScript, Flask, SQLite, GCP, Vertex AI, Document AI, RAG"
            deployLink="https://jananisetu.onrender.com/"
            githubLink="https://github.com/Ziya416/JananiSetu"
          />

          <Project
            title="SkillBridge-ATS"
            image="/skillbridgeats.png"
            overview="An intelligent applicant tracking engine that analyzes resumes against specific job descriptions to calculate precise match percentages. It dynamically suggests tailored projects and technical skills to help users close qualification gaps."
            tech="JavaScript, HTML, CSS, Gemini API, LangChain"
            deployLink="https://skillbridge-ats-1.onrender.com/"
            githubLink="https://github.com/Ziya416/SkillBridge-ATS"
          />

          <Project
            title="Disease_Prediction"
            image="/diseasepred.jpg"
            overview="Built in association with the Green Skill AI program by Edunet (Shell Foundation), this diagnostic tool leverages machine learning to predict potential illnesses based on user-entered symptoms, instantly displaying actionable precautionary measures."
            tech="Python, Streamlit, Scikit-Learn, Pandas, NumPy"
            deployLink="https://diseaseprediction-suhujbxzqtssxhayyvtwoh.streamlit.app/"
            githubLink="https://github.com/Ziya416/Disease_Prediction"
          />

          <Project
            title="Climate-Change-Prediction"
            image="/climatechangeprediction.png"
            overview="A data-driven forecasting tool built on real-world NASA datasets to model and predict environmental trends. It analyzes historical climate indicators to project future weather patterns and global shifts."
            tech="Python, Machine Learning, Data Visualization"
            deployLink="https://ziya416-climate-change-prediction-app-bx3flc.streamlit.app/"
            githubLink="https://github.com/Ziya416/Climate-Change-Prediction"
          />

          <Project
            title="Battery_dashboard"
            image="/batterymanagment.png"
            overview="An interactive analytics dashboard designed for monitoring core battery performance metrics, tracking charge cycles, and evaluating real-time operational efficiency."
            tech="Python, Data Visualization"
            deployLink="https://batterydashboard.streamlit.app/"
            githubLink="https://github.com/Ziya416/Battery_dashboard"
          />

          <Project
            title="Marine Plastic Sentinel"
            image="/marineplastic.jpg"
            overview="A geospatial reporting and computer vision model developed during the IBM SkillsBuild AI Strategy and Business Intelligence internship. It is designed to track and analyze marine plastic pollution."
            tech="Python, Computer Vision, Geospatial Analytics, Relay.app"
            githubLink="https://github.com/Ziya416/marine-plastic-sentinel/tree/main"
          />
        </div>
      </section>

      {/* BACKEND SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-10">
          Backend Systems & AI Architectures
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Backend
            title="Climate-AI-Agent"
            image="/climataiagent.png"
            overview="Multi-agent system with retriever, verifier, analyzer, and advisor for reliable insights."
            tech="Python, LLMs, Agentic AI"
            githubLink="https://github.com/Ziya416/Climate-AI-Agent"
          />

          <Backend
            title="Customer-Feedback-Analysis-Alert-System"
            image="/customerfeedbackanalysis.png"
            overview="Sentiment analysis API with alert pipeline and FastAPI Swagger integration."
            tech="Python, FastAPI, Pydantic"
            githubLink="https://github.com/Ziya416/Customer-Feedback-Analysis-Alert-System"
          />

          <Backend
            title="JananiRisk-Engine"
            image="/jananiriskengine.png"
            overview="Core maternal risk scoring engine focused on feature engineering, threshold validation, and statistical modeling."
            tech="Python, Jupyter"
            githubLink="https://github.com/Ziya416/JananiRisk-Engine"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-6">Let’s Connect</h2>

        <div className="flex justify-center gap-6">
          <Icon icon={<Mail />} />
          <Icon icon={<FiLinkedin />} />
          <Icon icon={<FiGithub />} />
        </div>
      </section>

    </div>
  );
}

/* COMPONENTS */

function Project({ title, overview, tech, highlight, deployLink, githubLink, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`p-4 rounded-2xl shadow-md bg-white flex flex-col gap-3 ${
        highlight ? "border-2 border-[#DCEFE3]" : ""
      }`}
    >
      <h3 className="text-lg font-semibold px-2">{title}</h3>

      {/* IMAGE WRAPPER WITH DARK OVERLAY */}
      <div className="relative group h-72 bg-[#e9f5ed] rounded-xl overflow-hidden flex items-center justify-center w-full">
        
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500 font-medium">Add {title} Image</span>
        )}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0d1117]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center">
          
          <h3 className="text-gray-200 text-xl font-semibold mb-4">{title}</h3>
          
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            {overview} Built with {tech}.
          </p>

          <div className="flex gap-4">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-transparent border border-gray-600 text-gray-300 hover:border-gray-300 hover:text-white rounded-sm text-sm font-medium transition-colors">
                Repo
              </a>
            )}
            {deployLink && (
              <a href={deployLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-transparent border border-gray-600 text-gray-300 hover:border-gray-300 hover:text-white rounded-sm text-sm font-medium transition-colors">
                Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Backend({ title, overview, tech, githubLink, image }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="p-4 border rounded-xl bg-white shadow-sm flex flex-col gap-3"
    >
      <h3 className="font-semibold text-lg px-2">{title}</h3>

      {/* IMAGE WRAPPER WITH DARK OVERLAY */}
      <div className="relative group h-56 bg-[#f4f4f4] rounded-xl overflow-hidden flex items-center justify-center w-full">
        
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500 font-medium text-sm">Add Architecture Image</span>
        )}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0d1117]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
          
          <h3 className="text-gray-200 text-lg font-semibold mb-3">{title}</h3>

          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            {overview} Built with {tech}.
          </p>

          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-transparent border border-gray-600 text-gray-300 hover:border-gray-300 hover:text-white rounded-sm text-sm font-medium transition-colors">
              Repo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Icon({ icon, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-3 bg-[#a4b476] text-white rounded-full hover:bg-[#8e9e62] hover:scale-110 transition-all shadow-sm inline-block"
    >
      {icon}
    </a>
  );
}

function SkillIcon({ icon, label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-20">
      <div className="p-3 bg-[#FAFAFB] rounded-xl border border-gray-100 w-14 h-14 flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <span className="text-xs font-medium text-gray-600 text-center">{label}</span>
    </div>
  );
}
