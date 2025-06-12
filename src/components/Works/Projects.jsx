import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import WorksLeft from "./Works";
import WorksRight from "./Works2";

const Projects = () => {
  const { t } = useTranslation();

  // Variantes para las animaciones
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    },
    exit: { 
      opacity: 0, 
      x: -100, 
      transition: { 
        duration: 0.5,
        ease: "easeIn"
      } 
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    },
    exit: { 
      opacity: 0, 
      x: 100, 
      transition: { 
        duration: 0.5,
        ease: "easeIn"
      } 
    }
  };

  const projectData = [
    {
      type: 'left',
      imageDesktop: '/WORK1.png',
      imageMobile: '/WORK1.png',
      projectName: t('logistics_argentina_title'),
      description: t('logistics_argentina_desc'),
      tags: [
        `#${t('logistics_argentina_tag1')}`,
        `#${t('logistics_argentina_tag2')}`,
        `#${t('logistics_argentina_tag3')}`
      ]
    },
    {
      type: 'right',
      imageDesktop: '/WORK2.png',
      imageMobile: '/WORK2.png',
      projectName: t('voi_title'),
      description: t('voi_desc'),
      tags: [
        `#${t('voi_tag1')}`,
        `#${t('voi_tag2')}`,
        `#${t('voi_tag3')}`
      ]
    },
    {
      type: 'left',
      imageDesktop: '/Norglass.png',
      imageMobile: '/Norglass.png',
      projectName: t('norglass_title'),
      description: t('norglass_desc'),
      tags: [
        `#${t('norglass_tag1')}`,
        `#${t('norglass_tag2')}`,
        `#${t('norglass_tag3')}`
      ]
    }
  ];

  const renderProject = (project, index) => {
    // Alternar: par = derecha (WorksRight), impar = izquierda (WorksLeft)
    const isEven = index % 2 === 0;
    const Component = isEven ? WorksRight : WorksLeft;
    const variants = isEven ? rightVariants : leftVariants;

    return (
      <motion.div
        key={index}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.3 }}
        style={{ cursor: 'default' }}
      >
        <Component {...project} />
      </motion.div>
    );
  };

  return (
    <div id="project" className="pt-10 md:pt-0">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 mt-16 text-center">{t('projects_section_title')}</h2>
      <div>
        {projectData.map((project, index) => renderProject(project, index))}
      </div>
    </div>
  );
};

export default Projects;
