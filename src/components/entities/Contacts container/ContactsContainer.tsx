import Link from 'next/link';
import Image from 'next/image';

import clockIcon from '../../../../public/assets/svg/headerClockIcon.svg';
import phoneIcon from '../../../../public/assets/svg/headerPhone.svg';

const ContactsContainer: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between rounded-2xl bg-inherit">
      <div className="flex flex-row items-center">
        <Image alt="clock_icon" className="w-4 h-6" src={clockIcon as string} />
        <p className="ml-2 min-w-max font-medium text-sm leading-5 text-gray-900">
          Звоните Пн-Вс: 8:30 - 19:00
        </p>
      </div>
      <div className="w-px h-12 border-l border-dashed border-gray-400 opacity-50 m-4"></div>
      <address className="flex flex-row items-center w-40 not-italic">
        <Image
          alt="phone_icon"
          className="mr-2 w-4 h-6"
          src={phoneIcon as string}
        />
        <Link
          href="tel:+7 (966) 250-77-99"
          className="text-gray-900 w-36 text-sm"
        >
          +7 (966) 250-77-99
        </Link>
      </address>
    </div>
  );
};

export default ContactsContainer;
