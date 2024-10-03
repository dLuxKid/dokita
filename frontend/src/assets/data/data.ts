import dental from "@/assets/dental.png";
import bones from "@/assets/bones.png";
import diagnosis from "@/assets/diagnosis.png";
import cardiology from "@/assets/cardiology.png";
import surgery from "@/assets/surgery.png";
import eye from "@/assets/eye.png";
import john from "@/assets/john.png";
import sophie from "@/assets/sophie.png";
import matt from "@/assets/matt.png";
import andy from "@/assets/andy.png";
import lily from "@/assets/lily.png";
import patrick from "@/assets/patrick.png";
import customer1 from "@/assets/customer-1.png";
import customer2 from "@/assets/customer-2.png";
import customer3 from "@/assets/customer-3.png";

export const services = [
  {
    img: dental,
    service: "Dental treatments",
    about:
      "Our dental treatments offer comprehensive care for your oral health, ensuring a radiant smile and optimal dental hygiene.",
  },
  {
    img: bones,
    service: "Bones treatment",
    about:
      "Our bone treatment services cater to a wide range of orthopedic needs, promoting strong and healthy skeletal systems.",
  },
  {
    img: diagnosis,
    service: "Diagnosis",
    about:
      "Through our diagnostic services, we employ cutting-edge technology and expert analysis to identify and address health concerns effectively.",
  },
  {
    img: cardiology,
    service: "Cardiology",
    about:
      "Our cardiology department provides advanced care for heart health, focusing on prevention, diagnosis, and treatment of cardiovascular diseases.",
  },
  {
    img: surgery,
    service: "Surgery",
    about:
      "Our surgical team offers specialized expertise in a variety of procedures, ensuring safe and successful outcomes for our patients.",
  },
  {
    img: eye,
    service: "Eye Care",
    about:
      "Our eye care services prioritize vision health, offering comprehensive exams, treatments, and surgeries to enhance and protect your eyesight.",
  },
];

export const team_data = [
  {
    img: john,
    name: "John Carter",
    title: "CEO & CO-FOUNDER",
    about:
      "With a vision for excellence and innovation, John Carter leads our team, driving forward our mission to redefine healthcare.",
  },
  {
    img: sophie,
    name: "Sophie Moore",
    title: "DENTAL SPECIALIST",
    about:
      "As a dedicated dental specialist, Sophie Moore combines expertise and compassion to deliver exceptional care and beautiful smiles.",
  },
  {
    img: matt,
    name: "Matt Cannon",
    title: "ORTHOPEDIC",
    about:
      "Specializing in orthopedic care, Matt Cannon is committed to restoring mobility and improving quality of life for our patients.",
  },
  {
    img: andy,
    name: "Andy Smith",
    title: "BRAIN SURGEON",
    about:
      "Andy Smith's expertise as a brain surgeon is matched only by his dedication to advancing neurosurgical techniques and patient care.",
  },
  {
    img: lily,
    name: "Lily Woods",
    title: "HEART SPECIALIST",
    about:
      "Lily Woods brings extensive experience and compassion to her role as a heart specialist, ensuring the best possible outcomes for cardiac patients.",
  },
  {
    img: patrick,
    name: "Patrick Meyer",
    title: "EYE SPECIALIST",
    about:
      "Patrick Meyer is a leader in eye care, providing personalized treatment plans and innovative solutions to preserve and enhance vision.",
  },
];

export const testimonials = [
  {
    img: john,
    testimonial: "An amazing service",
    info: "I was truly impressed by the level of care and expertise provided by the team. They exceeded my expectations in every way.",
    name: "John Carter",
    title: "CEO at Google",
  },
  {
    img: sophie,
    testimonial: "One of a kind service",
    info: "The attention to detail and genuine concern for my well-being made my experience unforgettable. I highly recommend their services to anyone.",
    name: "Sophie Moore",
    title: "MD at Google",
  },
  {
    img: andy,
    testimonial: "The best service",
    info: "From consultation to treatment, every step of the process was seamless and professional. I couldn't have asked for better care.",
    name: "Andy Smith",
    title: "CEO Dot Austere",
  },
];

export const feedbacks = [
  {
    rating: 4,
    feedback:
      "Booking an appointment with a specialist has never been easier. The platform is intuitive and user-friendly.",
    img: customer1,
  },
  {
    rating: 5,
    feedback:
      "I found a great doctor for my needs within minutes and the consultation was excellent. Highly recommend!",
    img: customer2,
  },
  {
    rating: 4,
    feedback:
      "The ability to read reviews and check the qualifications of doctors before booking is very reassuring.",
    img: customer3,
  },
];

export const faqs = [
  {
    question: "How can I book an appointment with a doctor?",
    answer:
      "To book an appointment, simply search for a doctor, select a time slot, and confirm your booking through the platform.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods including credit/debit cards, mobile payments, and bank transfers.",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes, you can reschedule or cancel your appointment up to 24 hours before the scheduled time.",
  },
  {
    question: "Are the doctors on this platform certified?",
    answer:
      "All doctors on our platform are verified and certified by relevant medical boards.",
  },
  {
    question: "Is my medical information secure?",
    answer:
      "Yes, we use advanced security measures to protect your personal and medical information.",
  },
  {
    question:
      "What should I do if I face technical issues during a consultation?",
    answer:
      "If you encounter any technical issues, please contact our support team immediately for assistance.",
  },
];

export const specializations = [
  { label: "Cardiology", value: "cardiology" },
  { label: "Dermatology", value: "dermatology" },
  { label: "Endocrinology", value: "endocrinology" },
  { label: "Gastroenterology", value: "gastroenterology" },
  { label: "General Practice", value: "general_practice" },
  { label: "Hematology", value: "hematology" },
  { label: "Infectious Disease", value: "infectious_disease" },
  { label: "Neurology", value: "neurology" },
  { label: "Obstetrics and Gynecology", value: "obstetrics_gynecology" },
  { label: "Oncology", value: "oncology" },
  { label: "Ophthalmology", value: "ophthalmology" },
  { label: "Orthopedics", value: "orthopedics" },
  { label: "Otolaryngology (ENT)", value: "otolaryngology" },
  { label: "Pediatrics", value: "pediatrics" },
  { label: "Psychiatry", value: "psychiatry" },
  { label: "Pulmonology", value: "pulmonology" },
  { label: "Radiology", value: "radiology" },
  { label: "Rheumatology", value: "rheumatology" },
  { label: "Surgery", value: "surgery" },
  { label: "Urology", value: "urology" },
  { label: "Anesthesiology", value: "anesthesiology" },
  { label: "Pathology", value: "pathology" },
  { label: "Nephrology", value: "nephrology" },
  { label: "Geriatrics", value: "geriatrics" },
  { label: "Allergy and Immunology", value: "allergy_immunology" },
  { label: "Emergency Medicine", value: "emergency_medicine" },
  { label: "Family Medicine", value: "family_medicine" },
  {
    label: "Physical Medicine and Rehabilitation",
    value: "physical_medicine_rehabilitation",
  },
  { label: "Plastic Surgery", value: "plastic_surgery" },
  { label: "Vascular Surgery", value: "vascular_surgery" },
];

export const degrees = [
  { label: "Bachelor of Medicine, Bachelor of Surgery (MBBS)", value: "mbbs" },
  { label: "Doctor of Medicine (MD)", value: "md" },
  { label: "Doctor of Osteopathic Medicine (DO)", value: "do" },
  { label: "Bachelor of Medical Science (BMedSci)", value: "bmedsci" },
  { label: "Bachelor of Medicine (BM)", value: "bm" },
  { label: "Bachelor of Surgery (BChir)", value: "bchir" },
  { label: "Bachelor of Dental Surgery (BDS)", value: "bds" },
  { label: "Doctor of Dental Surgery (DDS)", value: "dds" },
  { label: "Doctor of Podiatric Medicine (DPM)", value: "dpm" },
  { label: "Master of Medicine (MMed)", value: "mmed" },
  { label: "Master of Surgery (MS)", value: "ms" },
  { label: "Master of Public Health (MPH)", value: "mph" },
  { label: "Doctor of Philosophy (PhD)", value: "phd" },
  { label: "Doctor of Science (DSc)", value: "dsc" },
  { label: "Doctor of Medical Science (DMSc)", value: "dmsc" },
  { label: "Master of Science in Nursing (MSN)", value: "msn" },
  { label: "Doctor of Nursing Practice (DNP)", value: "dnp" },
  { label: "Master of Health Administration (MHA)", value: "mha" },
  { label: "Doctor of Physical Therapy (DPT)", value: "dpt" },
  { label: "Master of Science (MSc)", value: "msc" },
  { label: "Bachelor of Science in Nursing (BSN)", value: "bsn" },
  { label: "Bachelor of Science (BSc)", value: "bsc" },
  {
    label: "Fellowship of the Royal College of Surgeons (FRCS)",
    value: "frcs",
  },
  {
    label: "Fellowship of the American College of Surgeons (FACS)",
    value: "facs",
  },
  {
    label: "Fellowship of the Royal College of Physicians (FRCP)",
    value: "frcp",
  },
  {
    label: "Fellowship of the American College of Physicians (FACP)",
    value: "facp",
  },
  { label: "Doctor of Chiropractic (DC)", value: "dc" },
  { label: "Master of Bioethics (MBE)", value: "mbe" },
  { label: "Master of Clinical Research (MCR)", value: "mcr" },
];

export const languages = [
  { label: "English", value: "english" },
  { label: "Spanish", value: "spanish" },
  { label: "Mandarin", value: "mandarin" },
  { label: "Hindi", value: "hindi" },
  { label: "Arabic", value: "arabic" },
  { label: "Portuguese", value: "portuguese" },
  { label: "Japanese", value: "japanese" },
  { label: "German", value: "german" },
  { label: "Korean", value: "korean" },
  { label: "French", value: "french" },
  { label: "Italian", value: "italian" },
  { label: "Dutch", value: "dutch" },
];
