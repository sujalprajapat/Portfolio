import Email from '../../Asset/email.png';
import Github from '../../Asset/github.png';
import LinkedIn from '../../Asset/linkedin.png';
import Resume from '../../Asset/cv.png';
import upwork from '../../Asset/upwork.png'
import fiverr from '../../Asset/fiverr.png'
import stack from '../../Asset/stack.png'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
function ContactUs() {
    console.log('==============',);
    const dockItems = [
        {
            icon: Email,
            label: "Email",
            onClick: () => {
                window.location.href = "mailto:sujalprajapat49@gmail.com";
            },
        },
        {
            icon: upwork,
            label: "Upwork",
            onClick: () => {
                window.location.href = "https://www.upwork.com/freelancers/~01a8bec1588d616b1d";
            }

        },
        {
            icon: Github,
            label: "Github",
            onClick: () => {
                window.location.href = "https://github.com/sujalprajapat49";
            },
        },
        {
            icon: LinkedIn,
            label: "LinkedIn",
            onClick: () => {
                window.location.href = "https://linkedin.com/in/sujal-prajapat-2a44802b2";
            }
        },
        {
            icon: fiverr,
            label: "Fiverr",
            onClick: () => {
                window.location.href = "https://www.fiverr.com/sujalprajapat/buying?source=avatar_menu_profile"
                    ;
            }
        },
        {
            icon: stack,
            label: "Stack",
            onClick: () => {
                window.location.href = "https://stackoverflow.com/users/24679865/sujal-prajapat";
            }
        },
        {
            icon: Resume,
            label: "Resume",
            onClick: () => {
                const link = document.createElement("a");
                link.href = "/Sujal_Prajapat_Resume.pdf"; // make sure file is in public folder
                link.download = "Sujal_Prajapat_Resume.pdf";
                link.click();
            },
        },
    ];
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        type: "",
        message: ""
    };
    const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is necessary."),
        email: Yup.string().email("Invalid email").required("We need your email to contact you."),
        message: Yup.string().required("Please tell us how we can help you.")
    });

    const handleSubmit = (values, { resetForm }) => {

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE,
            process.env.REACT_APP_EMAILJS_TEMPLATE,
            values,
            process.env.REACT_APP_EMAILJS_PUBLIC
        ).then(() => {
            alert("Thank you ! i will reply as soon as possible .");
        }).catch(() => {
            alert("something want wrong can you try again !");
        });

        const formURL = process.env.REACT_APP_GOOGLE_FORM
        const data = new FormData();
        data.append(process.env.REACT_APP_FORM_FIRSTNAME, values.firstName);
        data.append(process.env.REACT_APP_FORM_LASTNAME, values.lastName);
        data.append(process.env.REACT_APP_FORM_EMAIL, values.email);
        data.append(process.env.REACT_APP_FORM_PHONE, values.phone);
        data.append(process.env.REACT_APP_FORM_TYPE, values.type);
        data.append(process.env.REACT_APP_FORM_MESSAGE, values.message);

        fetch(formURL, {
            method: "POST",
            mode: "no-cors",
            body: data
        });
        resetForm();
    };

    return (
        <section className="md:py-16 py-4">
            <div className="ribbon">
                <div className=" capitalize text-brownLight pe-5 xl:text-5xl md:text-4xl text-2xl flex items-center h-full">
                    <p> contact me</p>
                </div>
            </div>
            <div className=" m-auto">
                <div className='flex md:p-8 p-3 flex-col-reverse lg:flex-row'>
                    <div className='lg:w-1/2 mt-8 md:mt-0'>
                        <div className="text xl:text-[120px] sm:text-[80px] text-[70px] text-center md:text-start">
                            <h1>
                                Sujal
                            </h1>
                            <h1>
                                Prajapat
                            </h1>
                        </div>
                        <p className="xl:text-md text-sm  mt-3 text-brownMedium text-center md:text-start">A passionate <u><b> Full stack web Developer</b> </u> with a strong focus on building clean, user-friendly, and efficient web applications. I enjoy solving problems through code and continuously improving my skills to stay updated with modern technologies.</p>
                        <ul className='flex  flex-wrap  sm:gap-3 py-5 gap-3'>
                            {dockItems.map(item => (
                                <li className='flex  p-4 bg-dark1 rounded-[20px]  w-fit  cursor-pointer hover:bg-brownDark text-light' onClick={item.onClick}>
                                    <img src={item.icon} alt={item.label} className='h-5 w-5 bg-light rounded-full'></img>
                                    <p className='ms-3 text-sm'>{item.label}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='lg:w-1/2 h-auto bg-dark1 md:p-8 p-4'>
                        <Formik initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}>
                            {({ errors, touched }) => (
                                <Form>
                                    <div className='border-[2px] border-brownDark p-4'>
                                        <div className='md:flex gap-2 mb-4 '>
                                            <div className='w-full'>
                                                <Field type='text' name="firstName" className='w-full bg-dark2 p-2 mb-3 md:mb-0 text-brownLight' placeholder='Enter first name ...'></Field>
                                                {errors.firstName && touched.firstName && (
                                                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                                                )}
                                            </div>
                                            <div className='w-full'>
                                                <Field type='text' name="lastName" className='w-full bg-dark2 p-2 text-brownLight' placeholder='Enter last Name ... '></Field>
                                            </div>
                                        </div>
                                        <div className='md:flex gap-2 mb-4'>
                                            <div className='w-full'>

                                                <Field
                                                    name="email" className='w-full bg-dark2 p-2 mb-3 md:mb-0 text-brownLight' placeholder='Enter your email...'></Field>
                                                {errors.email && touched.email && (
                                                    <p className="text-red-500 text-sm">{errors.email}</p>
                                                )}
                                            </div>
                                            <div className='w-full'>
                                                <Field name="phone" className='w-full bg-dark2 p-2 text-brownLight' placeholder='Enter your contact number ... '></Field>
                                            </div>
                                        </div>
                                        <p className=' mb-4 text-brownLight '>{"// Who are you ??"}</p>
                                        <div className='md:flex gap-3 text-md mb-4 text-brownLight '>
                                            <div className='flex gap-2'>
                                                <Field className="accent-brownMedium" id="organization" type='radio' value="organization" name="type" />
                                                <label htmlFor="organization">Organization</label>
                                            </div>

                                            <div className='flex gap-2'>
                                                <Field className="accent-brownMedium" id="individual" type='radio' value="individual" name="type" />
                                                <label htmlFor="individual">Individual</label>
                                            </div>

                                            <div className='flex gap-2'>
                                                <Field className="accent-brownMedium" id="other" type='radio' value="other" name="type" />
                                                <label htmlFor="other">Something else</label>
                                            </div>
                                        </div>
                                        <div>
                                            <Field as="textarea" name="message" className='w-full bg-dark2 p-2 h-[100px] text-brownLight' placeholder='Enter your message here !!'></Field>
                                            {errors.message && touched.message && (
                                                <p className="text-red-500 text-sm">{errors.message}</p>
                                            )}
                                        </div>
                                    </div>
                                    <button type="submit" className='border border-brownDark px-4 py-1 rounded-sm mt-4 text-brownLight hover:bg-[#2F1E12] float-end'>
                                        Send ...
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactUs;