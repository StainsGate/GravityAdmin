import React, { useState } from "react";
import styled from "styled-components";
import SiderBar from "../components/SiderBar";
import Header from "../components/Header";

const IndexContainer = styled.div`
  background: #000; //#f8f9fa;
  width: 100vw;
`;
const IndexLayout = styled.div`
  padding: 1rem 1rem 1rem 266px;
  height: 100vh;
  overflow: scroll;

  @media (max-width: 1200px) {
    padding: 1rem;
  }
`;

export default function Index() {
  const [top, setTop] = useState(true);

  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const siderControll = () => {
    console.log("siderControll");
    setOpen(!open);
  };

  const scroll = (e) => {
    if (e.target.scrollTop == 0) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  return (
    <>
      <SiderBar open={open} close={close}></SiderBar>
      <IndexLayout onScroll={scroll}>
        <Header top={top} iconClick={siderControll}></Header>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor
            ipsam animi voluptatem, dolorum voluptatum, vel fugit et tempora
            accusamus ducimus iusto earum facere, corporis eos laudantium quae
            ea aliquid. Vel ut ad magnam ab at harum aliquam tempore obcaecati,
            quam, aut quisquam, ipsum et? Esse officiis dolores quasi et odio
            culpa facilis, dolore illo, rerum natus fugiat exercitationem
            consequatur. Cumque corrupti unde hic! Facilis architecto laboriosam
            minus at delectus veniam ipsa culpa nesciunt eius dolores totam eos
            impedit iste laborum, ex alias voluptatibus labore molestiae
            voluptatum blanditiis in. Similique! Quos natus neque aut unde,
            sequi reiciendis ratione et earum, impedit voluptate quasi quo non
            ex ullam, veritatis iste id delectus repellat expedita
            reprehenderit. Eos perferendis et harum nihil! Maiores. Sunt natus
            adipisci aut cumque fuga. Illum dolore, assumenda officiis et,
            similique corporis perferendis molestiae, consectetur nihil laborum
            laudantium aliquam quas soluta doloribus quos vel! Nostrum
            recusandae neque sunt nobis. Nisi molestiae quia unde corrupti
            ducimus cupiditate commodi impedit ullam tenetur incidunt sequi,
            doloribus odit architecto maxime repudiandae quo atque in. Eligendi,
            animi id. Non ipsum maxime eligendi commodi error. Blanditiis
            tenetur ullam eligendi earum saepe voluptates, et rem neque error
            maxime alias tempora sed, ipsa ea! Ipsum voluptatem eum beatae
            laboriosam laudantium debitis, aliquid unde iure, sint
            necessitatibus sapiente? Harum nisi cum inventore suscipit hic
            aperiam praesentium, voluptatibus eaque delectus accusamus quidem
            cupiditate reiciendis neque commodi laborum tenetur perferendis
            ullam impedit incidunt sed nostrum error. Quis at maiores itaque!
            Aperiam mollitia quia asperiores neque eaque quis dolor obcaecati
            provident non odio nostrum sint quidem, perspiciatis ullam libero
            nihil! Nisi deserunt impedit ipsam incidunt odit sed ullam vitae in
            ipsum. Ullam, impedit? Aliquid recusandae vitae perferendis cumque
            suscipit provident? Eveniet corporis ex, rerum perspiciatis nulla
            iusto possimus ipsum nihil inventore? Nisi explicabo natus dolorem
            et pariatur necessitatibus similique possimus nam. Laboriosam sunt
            corrupti recusandae deleniti quia quidem unde minus veniam? Aut
            adipisci sint fuga accusamus dignissimos ad eveniet voluptates?
            Explicabo reiciendis ad, odio minima incidunt excepturi error
            adipisci eligendi cum. Non necessitatibus ex, optio, doloribus totam
            neque a voluptas error possimus libero, quam officia consequatur!
            Eos deleniti ad ullam quis enim, qui suscipit modi maxime quisquam
            doloremque nobis recusandae praesentium. Tempora modi fuga impedit
            eveniet, nam temporibus explicabo nostrum iure autem voluptas
            praesentium dicta earum doloribus repudiandae blanditiis atque quo
            sequi non consequuntur excepturi dignissimos velit sit. Ducimus,
            eligendi exercitationem? Eveniet temporibus recusandae, doloremque
            accusamus quisquam soluta, magni laboriosam eum deleniti autem
            praesentium, est ipsa perspiciatis quidem facere ut molestiae
            dolorum obcaecati fugit cupiditate incidunt pariatur magnam. Quis,
            voluptas in? Eligendi natus, voluptatibus quia porro itaque numquam
            adipisci consequatur odio laboriosam amet placeat veniam expedita
            deserunt consectetur nihil totam impedit maiores voluptas soluta
            repudiandae cum dolores distinctio? Impedit, voluptate repudiandae!
            Hic, enim. Est non nulla dolorum, eligendi dolor quod sint
            distinctio voluptate nobis? Atque doloremque iusto quidem animi
            maxime sunt nemo esse eaque rem. Iure recusandae ex praesentium illo
            sint. Doloremque, voluptatibus atque commodi ducimus illo earum
            dolorem ex aliquam fugit provident hic est nihil cum quod ab maiores
            iste ipsam dolore. Esse veniam temporibus, laborum eaque neque vero
            cupiditate. Dolorem accusantium cum, iste enim repudiandae qui
            debitis at, saepe architecto distinctio fugiat nihil quos eveniet
            aliquid nostrum sint iure nesciunt! Veniam voluptas aliquam
            laudantium eum odio est, vitae incidunt! Totam nostrum voluptates
            sequi expedita tenetur eaque repudiandae? Ipsum omnis blanditiis
            provident nulla adipisci modi ut? Autem exercitationem voluptatibus,
            assumenda vel, libero vitae voluptates numquam, incidunt dolores
            quae culpa aut. Provident reprehenderit eos ullam culpa commodi
            aliquam ducimus mollitia velit? Temporibus dolor repellat maiores
            recusandae sed nobis aut voluptas debitis enim, unde eius sunt
            adipisci, fugiat, perspiciatis ea nemo nulla. Non, aliquid
            perspiciatis molestias aspernatur, sequi rem voluptate cupiditate
            nesciunt ad dolore voluptatibus a? Explicabo, eaque? Fugiat,
            accusantium. Animi at amet harum cum dicta excepturi ea natus
            commodi, maxime voluptas! Suscipit voluptatem nobis eum facilis
            adipisci, explicabo assumenda obcaecati tempore doloremque odio ipsa
            eos dolorem fugit omnis quas officia asperiores ipsam dolor optio?
            Quos, perferendis? Suscipit excepturi animi cumque maxime! Odio hic
            iusto, deserunt minima, dignissimos id dolor, quo enim aliquam
            ducimus aliquid? Ut, rem harum voluptatem quam perferendis dolores
            sunt sed, repellendus similique sit delectus consequatur rerum
            voluptas sequi? Incidunt magnam non error, at expedita deserunt
            commodi distinctio deleniti, similique dolore, nobis quibusdam
            laboriosam. Maxime quod molestias repudiandae minima cupiditate at,
            ipsam iste vel dicta nobis similique libero pariatur! Iure esse
            quaerat eligendi ad vel hic perspiciatis ullam assumenda fuga, sequi
            nulla minus voluptas, quod quibusdam impedit neque odio repudiandae
            suscipit dicta. Consequatur, enim perferendis suscipit maiores
            provident unde. Provident, porro dignissimos. Officia nulla commodi
            quae. Quos similique ullam dolor beatae quaerat mollitia natus
            ducimus consequatur vel assumenda nulla saepe a, ea enim? Recusandae
            natus assumenda quia nostrum ab? Consequatur obcaecati ullam cum
            porro mollitia harum, pariatur voluptates? Dolore nihil ratione
            saepe cumque ea quae, in nam, autem officia doloribus voluptas earum
            quibusdam deleniti quaerat. Recusandae adipisci nulla animi? Animi,
            nisi eius enim perspiciatis minus maiores officia explicabo. In
            rerum nihil sed, cumque quas molestias provident eum ab dolor
            nostrum molestiae delectus temporibus qui debitis id pariatur sunt
            dignissimos? Minima perspiciatis quidem blanditiis earum quam
            repellendus magnam sapiente pariatur corporis nostrum cum at ea,
            amet provident? Officia ipsum nulla, aliquam ullam architecto
            voluptatum, esse est dignissimos, alias quaerat ad. Cumque
            cupiditate, libero laudantium aspernatur vero omnis dolorem ullam,
            rerum provident ratione adipisci? Delectus reprehenderit ad corrupti
            illo, non ab repudiandae autem rerum dolores, quo quis atque
            obcaecati ducimus facilis! Nesciunt nisi dolores architecto, minima
            enim sunt doloremque quam veniam id odio dolore, pariatur
            accusantium reiciendis perferendis similique. Nobis rerum blanditiis
            nesciunt aut saepe eum quaerat unde quos laboriosam temporibus.
            Maiores, sed ipsum. Aperiam eaque tenetur odit impedit id officia,
            aliquid, eius sint nobis ipsa, et consequatur sunt perspiciatis
            laborum voluptatum eligendi aspernatur expedita recusandae libero
            laudantium. Animi, illum mollitia. Odio expedita nihil, commodi
            veritatis aut deleniti debitis sunt aliquid atque quia rerum aperiam
            quod suscipit ut quasi iusto vero, delectus, nam porro voluptate
            perspiciatis fugiat non eos illo. Aut. Officia deleniti unde tempora
            expedita ipsa quibusdam nisi, nihil fugiat temporibus soluta
            repellendus sint, numquam commodi modi. Deleniti quibusdam repellat
            perferendis soluta quia quisquam dolorum, perspiciatis animi! Non,
            provident! Vel. Harum quis ipsam minus quo accusantium aspernatur
            hic cum molestias perspiciatis, itaque fuga numquam, incidunt
            dolorum aut fugit? Eos dolores voluptas unde eius inventore. Dicta,
            tenetur adipisci. Numquam, impedit sequi. Expedita placeat modi
            tenetur officia blanditiis velit possimus, ad ducimus qui iste
            repudiandae maiores! Debitis dolorum voluptatem aliquam suscipit
            alias explicabo quibusdam saepe tempora asperiores, dignissimos
            exercitationem quae sed molestias! Corporis expedita, aperiam
            reiciendis, atque deleniti optio quas iste perspiciatis libero
            officia asperiores maiores fugit. Excepturi neque delectus corporis
            nesciunt? Voluptates fugiat rem culpa quos aliquid nobis, vero neque
            modi! Nihil repudiandae illum provident excepturi consequatur
            possimus voluptatibus temporibus pariatur corrupti quisquam
            voluptate officia architecto, quam et quod consequuntur quo in!
            Pariatur, accusamus explicabo? Doloremque ab aspernatur omnis fugit
            illum? Nam voluptate vero animi quidem a totam earum, atque corporis
            doloremque exercitationem eius incidunt vitae reprehenderit dolorum
            error nemo facere omnis, facilis molestias hic aspernatur eum rem
            blanditiis beatae. Harum. Totam maiores delectus blanditiis. Ad,
            ipsum enim officia eaque, dolores, sapiente nostrum pariatur quam
            possimus porro eveniet ut recusandae iste illo. Modi voluptatem
            itaque saepe porro, temporibus dolorem cumque dolor! Perferendis
            nihil ducimus, mollitia eaque quo provident iste, sunt nam illo,
            laboriosam non tempore id dolor possimus cumque? Recusandae maiores
            accusamus doloremque cum vel error esse quis? Corrupti, aut nulla.
            Molestiae optio eos nostrum iure dolor explicabo ipsum quis numquam
            rem fuga blanditiis vero aperiam, voluptatum itaque officiis et quas
            aspernatur! Similique maxime pariatur, quas delectus dicta quibusdam
            assumenda porro! Ipsam eligendi quaerat, enim sapiente laborum odio
            inventore, natus perspiciatis tempore iste itaque neque doloremque.
            Culpa expedita repellendus quas ipsam consequatur at beatae.
            Adipisci voluptate animi repellat perferendis quibusdam tempore!
            Reprehenderit, explicabo rerum. Cum deserunt voluptates atque
            suscipit, quis amet eligendi sequi id, laudantium distinctio nostrum
            quasi vel ut eveniet provident deleniti ipsam veniam aperiam!
            Mollitia nam rerum placeat voluptate! Incidunt eaque officiis
            libero? Commodi doloremque quam culpa doloribus vitae ipsa numquam
            aliquid perspiciatis sit quo, esse adipisci eligendi fugiat ad minus
            voluptates, provident cupiditate vero! Dolorum, eveniet commodi.
            Aperiam! Maiores ratione libero velit sequi doloribus nesciunt alias
            labore rem atque, doloremque accusantium iure reiciendis nemo
            dolores magnam unde veritatis officia suscipit fugit obcaecati
            laborum aliquid! Ea quas ratione eius. Soluta minima repudiandae
            molestias eveniet quasi quaerat non aut laboriosam et qui doloremque
            deleniti, alias possimus eaque quidem nisi veniam impedit doloribus
            facilis quos magni consequuntur, quo eum! Mollitia, est. Unde
            architecto obcaecati molestiae rerum non voluptas minus, placeat
            expedita itaque, mollitia adipisci nobis consequatur repellendus
            deleniti fugiat a voluptatum beatae veritatis reiciendis cumque,
            dolores assumenda! Ad asperiores est dignissimos. Unde similique
            nulla atque, expedita laborum perspiciatis laboriosam vero nostrum
            reprehenderit illum est repellat! In autem laudantium delectus
            debitis officiis? Eaque velit maiores molestiae repudiandae, cumque
            vero magnam ut soluta. Ab et minima animi possimus odit eius nostrum
            cumque temporibus. Nam alias molestias veniam expedita aspernatur?
            Eveniet, aliquam reprehenderit cumque quia quis at aliquid, vero
            nobis nam laborum, provident accusamus.
          </p>
        </div>
      </IndexLayout>
    </>
  );
}
