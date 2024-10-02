import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image, // Add image prop
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    {/* Name, Image, and Company at the top */}
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-1 items-center gap-3">
        <img
          src={image} // Display image
          alt={name}
          className="w-10 h-10 rounded-full object-cover" // Style image
        />
        <div className="flex flex-col">
          <p className="text-[18px] font-medium text-white">{name}</p>
          <p className="text-secondary mt-1 text-[16px]">
            {designation} {company}
          </p>
        </div>
      </div>
    </div>

    {/* Testimonial below */}
    <div className="mt-7">
      <p className="text-[14px] tracking-wider text-white">{testimonial}</p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
