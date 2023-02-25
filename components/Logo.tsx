import classNames from "classnames"
import Image from "next/image";
import logoRoundSrc from '@/images/logo-round.png';
import logoFullSrc from '@/images/logo-full.png';

export const LogoRoundSvg = ({ size, className }: { size: number; className?: string; }) => (
  <svg className={className} width={size} height={size} viewBox={`0 0 224 224`} fill="none">
    <path d="M112.629 224C174.485 224 224.629 173.856 224.629 112C224.629 50.1441 174.485 0 112.629 0C50.7735 0 0.629395 50.1441 0.629395 112C0.629395 173.856 50.7735 224 112.629 224Z" fill="#000000"/>
    <path d="M18.4175 134.513L23.2381 133.01C24.4576 139.22 27.6939 142.279 32.9471 142.189L32.7193 126.526C28.1416 125.911 24.8932 125.059 22.9741 123.971C21.0852 122.838 19.9049 121.07 19.433 118.668C18.8522 115.711 19.647 112.95 21.8173 110.384C24.0176 107.775 27.2652 106.057 31.5599 105.23L32.3441 105.08L32.307 101.635L34.8277 101.149L34.8633 104.883C38.0645 104.804 40.8061 105.542 43.0882 107.098C45.3703 108.653 46.8354 110.884 47.4835 113.789L42.831 115.259C41.771 111.245 39.1519 109.256 34.9735 109.292L35.1268 122.208C40.0997 122.862 43.5674 123.844 45.53 125.155C47.5227 126.42 48.7622 128.292 49.2486 130.768C49.9164 134.168 49.1154 137.391 46.8454 140.436C44.5683 143.444 41.1517 145.387 36.5957 146.263L35.4754 146.479L35.5388 151.242L33.1301 151.705L33.0121 146.664C29.6615 146.773 26.7892 146.059 24.3951 144.525C21.9938 142.954 20.2755 140.618 19.2404 137.52C18.8442 136.292 18.5699 135.289 18.4175 134.513ZM44.5198 131.851C44.2584 130.52 43.507 129.457 42.2653 128.659C41.061 127.855 38.6917 127.238 35.1575 126.805L35.3993 141.948C38.4616 141.358 40.8559 140.131 42.5821 138.264C44.3458 136.391 44.9916 134.253 44.5198 131.851ZM24.196 117.464C24.4356 118.684 25.0611 119.599 26.0724 120.21C27.1211 120.814 29.3192 121.35 32.6667 121.818L32.4543 109.489C29.5414 110.049 27.3422 111.086 25.8566 112.599C24.4011 114.069 23.8476 115.69 24.196 117.464ZM62.4462 140.427L61.7142 100.293L84.2892 95.9495L84.3884 100.303L66.5189 103.741L66.753 118.253L83.054 115.117L83.1549 119.182L66.7979 122.329L67.0956 139.532L62.4462 140.427ZM98.0947 133.569L97.3635 93.4344L109.575 91.0851C113.16 90.3954 116.154 90.74 118.556 92.119C120.995 93.4908 122.525 95.7475 123.141 98.8893C123.824 102.363 123.322 105.432 121.636 108.097C119.95 110.761 117.324 112.781 113.758 114.158L122.967 128.784L117.925 129.753L109.061 115.407L102.451 116.678L102.744 132.674L98.0947 133.569ZM102.43 112.425L109.487 111.067C112.662 110.456 115.064 109.169 116.694 107.206C118.316 105.206 118.848 102.783 118.289 99.9375C117.905 97.9789 116.961 96.6263 115.458 95.8797C113.947 95.096 112.016 94.9306 109.664 95.3833L102.157 96.8273L102.43 112.425ZM137.777 125.935L137.045 85.8003L160.124 81.3603L160.212 85.6586L141.839 89.1933L142.081 102.265L158.886 99.0319L158.987 103.097L142.126 106.342L142.372 120.62L160.802 117.074L160.856 121.494L137.777 125.935ZM175.891 118.602L175.158 78.4681L198.238 74.0281L198.326 78.3262L179.953 81.861L180.195 94.9325L196.999 91.6996L197.101 95.7648L180.239 99.0089L180.486 113.288L198.915 109.743L198.969 114.162L175.891 118.602Z" fill="white"/>
  </svg>
)

export const LogoRound = ({
  size=64,
  className,
}: { size?: number, className?: string, }) => (
  <Image className={className} src={logoRoundSrc} alt="Logo" style={{
    height: size,
    width: size,
  }} />
)

export const LogoFull = ({
  size=64,
  className,
}: { size?: number, className?: string, }) => (
  <Image className={className} src={logoFullSrc} alt="Logo" style={{
    height: size,
  }} />
)

export const LogoHeader = ({
  size=64,
  className,
}: { size?: number, className?: string, }) => (
  <span className={classNames(
    className,
    "inline-block",
  )}>
    <LogoRoundSvg size={size} className="align-middle mr-3 inline-block" />
    <span
      className="sm:inline-block text-xl tracking-wider relative top-0.5 inline-block font-mono uppercase italic font-light">
      Free Things Map
    </span>
  </span>
);