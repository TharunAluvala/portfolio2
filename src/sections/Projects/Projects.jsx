import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import ximage from '../../assets/ximage.png';
import dimage from '../../assets/dimage.png';
// import Dimage from './public/dimage.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
         src={ximage}
          link="https://dappsocial.io/crossx/offers/"
          h3="Cross-X"
          p="Decentralized Cross-Chain"
        />
        <ProjectCard
           src={dimage}
          link="https://dappsocial.io/vault/"
          h3="DVault"
          p="Secure Personnel Locker"
        />
        <ProjectCard
        src={dimage}
          link="https://risestreet.io/dstreet/"
          h3="DStreet"
          p="A large NFT Marketplace"
        />
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
