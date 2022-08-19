import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, minima. Pariatur porro eveniet necessitatibus. Nemo neque vel nostrum numquam quaerat?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, amet, voluptatum itaque deserunt fugit laborum optio aliquam at molestiae doloremque, sint repellat officiis. Delectus molestias eligendi laborum beatae explicabo possimus tempora alias est recusandae in iusto dolorum eaque suscipit sit, doloremque magnam id dolorem aut libero illo ab veritatis velit?</p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
