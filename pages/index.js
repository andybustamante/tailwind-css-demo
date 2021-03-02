import { ParoLink } from '../components/ParoLink'
const navItems = [
  { name: 'Home', url: 'https://paro.io' },
  { name: 'About', url: 'https://paro.io/about' },
  { name: 'Contact', url: 'https://paro.io/contact' },
]

export default function Home() {
  return (
    <div className="max-w-7xl max-auto h-screen">
      <div className="flex justify-between px-2 py-4 bg-paro-blue text-white">
        <div className="text-xl">
          <svg height="15px" viewBox="0 0 155 26" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group-15" fill="#FFFFFF">
                <path
                  d="M54.9249333,13.5893627 C55.996422,13.5893627 56.9570587,13.4342172 57.8106908,13.1262805 C58.6628802,12.8182199 59.3851011,12.3889673 59.9796379,11.8438513 C60.5720105,11.2971243 61.0267199,10.6543607 61.3431649,9.9115952 C61.6610527,9.16882966 61.8184336,8.35828088 61.8184336,7.48007278 C61.8184336,5.54620574 61.2430134,4.05348741 60.0920528,3.01145948 C58.9395292,1.96459874 57.2161541,1.44240755 54.9249333,1.44240755 L50.3798831,1.44240755 L50.3798831,13.5893627 L54.9249333,13.5893627 Z M54.9249333,0 C57.7931373,0 59.9552312,0.64833989 61.4133792,1.94167388 C62.8700844,3.2358753 63.6,5.08299961 63.6,7.48007278 C63.6,8.58430763 63.3958497,9.59969315 62.9930796,10.5259815 C62.5904297,11.4523938 62.0148893,12.2503029 61.2666987,12.9214437 C60.5169452,13.5909736 59.6082478,14.1132887 58.5367591,14.4888847 C57.4652704,14.8631176 56.2608075,15.0497384 54.9249333,15.0497384 L50.3798831,15.0497384 L50.3798831,25.2 L48.6,25.2 L48.6,0 L54.9249333,0 Z"
                  id="Fill-1"
                ></path>
                <path
                  d="M87.4806732,16.0453759 L82.4034078,3.31296869 C82.2272212,2.89784076 82.0564331,2.39696104 81.8926384,1.81640154 C81.8215994,2.10153866 81.7460208,2.37254904 81.663326,2.62534336 C81.579895,2.88135957 81.4918017,3.11692917 81.3989234,3.33031732 L76.3201857,16.0453759 L87.4806732,16.0453759 Z M93,25.2 L91.6071935,25.2 C91.4433989,25.2 91.3091732,25.1574959 91.2015718,25.0685222 C91.0955654,24.9795485 91.0128706,24.86133 90.9543462,24.7188234 L88.0273914,17.4010474 L75.7734674,17.4010474 L72.8481077,24.7188234 C72.8005029,24.8511686 72.717072,24.9629434 72.5992871,25.0558825 C72.4830972,25.1520434 72.341878,25.2 72.1757522,25.2 L70.8,25.2 L81.0106013,0 L82.7918525,0 L93,25.2 Z"
                  id="Fill-3"
                ></path>
                <path
                  d="M110.00507,12.4495633 C111.121661,12.4495633 112.123131,12.3156078 113.009481,12.0469532 C113.89335,11.7800334 114.642498,11.3987372 115.254446,10.9002144 C115.865525,10.3999567 116.333076,9.80291896 116.654122,9.09943548 C116.975044,8.39917388 117.135071,7.61068253 117.135071,6.73247443 C117.135071,4.93888277 116.550787,3.61010818 115.380607,2.74268096 C114.209558,1.87550157 112.501613,1.44302714 110.252678,1.44302714 L105.636463,1.44302714 L105.636463,12.4495633 L110.00507,12.4495633 Z M121.2,25.2 L119.631613,25.2 C119.428168,25.2 119.260202,25.1676574 119.123001,25.1022286 C118.987412,25.0361802 118.859639,24.9148643 118.739805,24.7367939 L110.646914,14.5156511 C110.550774,14.3857848 110.452897,14.2715323 110.351299,14.1753718 C110.251065,14.0824331 110.13917,14.0060995 110.013754,13.9547974 C109.887593,13.8996538 109.739352,13.8634697 109.566671,13.8390578 C109.39548,13.8153895 109.184964,13.8012628 108.935,13.8012628 L105.636463,13.8012628 L105.636463,25.2 L103.8,25.2 L103.8,0 L110.252678,0 C113.153753,0 115.326892,0.560853659 116.771599,1.68330448 C118.213825,2.80736625 118.936055,4.45287569 118.936055,6.62540913 C118.936055,7.58713808 118.769701,8.46534618 118.436995,9.26176829 C118.105032,10.055712 117.625572,10.7536192 117.001839,11.3538788 C116.377239,11.9540146 115.6235,12.4441109 114.73715,12.8236723 C113.853157,13.2026141 112.855656,13.4593725 111.752464,13.5893627 C112.037907,13.7673092 112.292585,14.0044886 112.517367,14.2999095 L121.2,25.2 Z"
                  id="Fill-5"
                ></path>
                <path
                  d="M152.340324,12.9204425 C152.340324,11.1713506 152.103804,9.59569895 151.633164,8.2012645 C151.160244,6.80621282 150.495084,5.62286928 149.632404,4.65456689 C148.770444,3.68391904 147.736884,2.94238507 146.527884,2.42601474 C145.320324,1.91285397 143.987724,1.6554712 142.528524,1.6554712 C141.077724,1.6554712 139.751244,1.91285397 138.544524,2.42601474 C137.336964,2.94238507 136.298844,3.68391904 135.430764,4.65456689 C134.563524,5.62286928 133.890684,6.80621282 133.413204,8.2012645 C132.935724,9.59569895 132.697764,11.1713506 132.697764,12.9204425 C132.697764,14.6844712 132.935724,16.2592588 133.413204,17.6490023 C133.890684,19.0378817 134.563524,20.2180157 135.430764,21.1886635 C136.298844,22.1569659 137.336964,22.8968951 138.544524,23.4062291 C139.751244,23.9139583 141.077724,24.1689956 142.528524,24.1689956 C143.987724,24.1689956 145.320324,23.9139583 146.527884,23.4062291 C147.736884,22.8968951 148.770444,22.1569659 149.632404,21.1886635 C150.495084,20.2180157 151.160244,19.0378817 151.633164,17.6490023 C152.103804,16.2592588 152.340324,14.6844712 152.340324,12.9204425 M154.168764,12.9204425 C154.168764,14.8617382 153.885684,16.6194712 153.323484,18.1990731 C152.759124,19.7763296 151.965804,21.1259535 150.943644,22.2441181 C149.920764,23.3599372 148.692684,24.2238052 147.260844,24.8327592 C145.829124,25.4409726 144.251724,25.7484741 142.528524,25.7484741 C140.803884,25.7484741 139.228764,25.4409726 137.802324,24.8327592 C136.375884,24.2238052 135.151524,23.3599372 134.128764,22.2441181 C133.104324,21.1259535 132.312444,19.7763296 131.748804,18.1990731 C131.185044,16.6194712 130.903644,14.8617382 130.903644,12.9204425 C130.903644,10.9932195 131.185044,9.23869608 131.748804,7.65983483 C132.312444,6.08109703 133.104324,4.73221378 134.128764,3.61478986 C135.151524,2.49662526 136.375884,1.63115254 137.802324,1.01516211 C139.228764,0.401517129 140.803884,0.0924109091 142.528524,0.0924109091 C144.251724,0.0924109091 145.829124,0.399912344 147.260844,1.00812574 C148.692684,1.61707981 149.920764,2.48255254 150.943644,3.60540804 C151.965804,4.730609 152.759124,6.08109703 153.323484,7.65983483 C153.885684,9.23869608 154.168764,10.9932195 154.168764,12.9204425"
                  id="Fill-7"
                ></path>
                <path
                  d="M14.1,0 C6.98747836,0 1.2,5.78917885 1.2,12.904067 C1.2,16.030159 2.33903094,19.0490026 4.40812363,21.4051158 L4.57763188,21.6 L5.52816865,20.6492877 L5.38062449,20.4796019 C3.55065508,18.3743556 2.54254011,15.6838361 2.54254011,12.904067 C2.54254011,6.53011131 7.72730867,1.34370816 14.1,1.34370816 C20.4726913,1.34370816 25.6573358,6.53011131 25.6573358,12.904067 C25.6573358,15.6838361 24.6493449,18.3743556 22.8193755,20.4796019 L22.6718314,20.6492877 L23.6223681,21.6 L23.7918764,21.4051158 C25.8609691,19.0490026 27,16.030159 27,12.904067 C27,5.78917885 21.2125216,0 14.1,0"
                  id="Fill-10"
                ></path>
                <path
                  d="M22.2781662,21.1356431 C20.1345354,23.1822892 17.3360123,24.3073354 14.3709662,24.3073354 C11.40592,24.3073354 8.60973538,23.1822892 6.46536615,21.1356431 L14.3709662,13.2284431 L22.2781662,21.1356431 Z M14.3709662,11.4290585 L1.23076925e-05,25.8000123 L1.88395077,25.8000123 L5.52419692,22.1190277 C7.90721231,24.40432 11.0381662,25.6592123 14.3709662,25.6592123 C17.7091815,25.6592123 20.8417354,24.4081354 23.2177354,22.1299815 L26.8579815,25.8000123 L28.74192,25.8000123 L14.3709662,11.4290585 Z"
                  id="Fill-12"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-4">
            {navItems.map((item) => {
              return <ParoLink name={item.name} url={item.url} />
            })}
          </div>
        </div>
        <div className="h-15 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </div>
  )
}
