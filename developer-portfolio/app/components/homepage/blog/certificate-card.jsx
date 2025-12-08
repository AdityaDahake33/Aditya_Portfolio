// @flow strict
import Image from 'next/image';
import Link from 'next/link';

function CertificateCard({ certificate }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group overflow-hidden">
      <div className="h-44 lg:h-52 w-full bg-gradient-to-br from-[#1a1443] to-[#0f0b21] flex items-center justify-center overflow-hidden rounded-t-lg">
        {certificate?.image ? (
          <Image
            src={certificate.image}
            height={1080}
            width={1920}
            alt={certificate.title}
            className='h-full w-full object-cover group-hover:scale-110 transition-all duration-300'
          />
        ) : (
          <div className="text-center text-[#16f2b3] text-sm font-semibold p-4">
            Certificate Image Coming Soon
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4 flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-2 line-clamp-2">
          {certificate.title}
        </h3>
        <p className="text-sm text-[#16f2b3] mb-1">{certificate.issuer}</p>
        <p className="text-xs text-[#a8a8a8] mb-3">{certificate.date}</p>
        <Link
          href={certificate.link}
          className="text-xs font-medium text-[#16f2b3] hover:text-white transition-all duration-300 inline-flex items-center gap-1"
        >
          View Certificate →
        </Link>
      </div>
    </div>
  );
}

export default CertificateCard;
