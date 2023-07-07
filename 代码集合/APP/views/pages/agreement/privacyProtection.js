import React from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView } from 'react-native'
import dp2px from '../../utils/common/dp2px';

export default function PrivacyProtection() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containSty}>
          <Text style={styles.titleSty}>《隐私保护声明》</Text>
          <View style={styles.descContainSty}>
            <Text>尊敬的用户：</Text>
            <Text style={styles.descLineSty}>
              欢迎访问卧涛网（以下简称“我们”）！您的信任对我们非常重要，我们深知个人信息对您的重要性，我们将会按照法律要求和业界成熟的安全标准，为您的个人信息提供相应的安全保护措施。
              我们希望通过本《隐私保护声明》向您清晰地介绍在使用我们的产品/服务时，我们如何处理您的个人信息，以及我们为您提供的访问、更正、删除和保护这些信息的方式。
            </Text>
            <Text style={styles.descLineSty}>
              【特别提示】请您在使用我们提供的各项产品/服务前，仔细阅读并充分理解本《隐私保护声明》（重点内容我们已将字体加粗请您特别关注）并作出相应选择。一旦您使用或继续使用我们的产品/服务时，即意味着您同意我们按照隐私保护声明处理您的相关信息。
              如对本《隐私保护声明》有任何疑问，您可以通过本《隐私保护声明》中“如何联系我们”中提供的方式联系我们。
            </Text>
            <Text style={styles.descLineSty}>在同意卧涛网服务协议（“协议”）之时，您已经同意我们按照本《隐私保护声明》来使用和披露您的个人信息。本《隐私保护声明》的全部条款属于该协议的一部份。</Text>

            <Text style={[styles.titleLineSty, styles.strongSty]}>一、我们收集和使用您的个人信息的目的、方式和范围</Text>

            <Text>用户名和密码</Text>
            <Text style={styles.descLineSty}>当您打算注册成会员后，我们要求您选择一个用户名和密码。您只能通过您的密码来使用您的帐号。如果您泄漏了密码，您可能会丢失您的个人识别信息，因您泄露密码致使个人信息丢失造成的不利后果应由您自行承担。因此，无论任何原因危及您的密码安全，您应该立即通过在线客服或者热线电话400-0507-580和我们取得联系。</Text>

            <Text style={styles.descLineSty}>注册会员</Text>
            <Text style={styles.descLineSty}>当您在注册为会员时，我们要求您填写一张注册表。注册表要求提供您的真实姓名、地址、电话号码、电子邮件地址和真实身份。我们通过注册表上的信息来获得会员的统计资料。我们将会用这些统计数据来给我们的会员分类，例如身份和地区等，以便有针对性地向我们的会员提供新的服务和机会。我们会通过您的邮件地址来通知您这些新的服务和机会。</Text>

            <Text style={styles.descLineSty}>实名认证</Text>
            <Text style={styles.descLineSty}>1.如果您是个人，您可以通过向我们提交姓名、性别、出生年月、身份证号码、身份证扫描件等来完成实名认证。前述信息中身份证号码、身份证扫描件属于个人敏感信息，收集此类信息是用于验证身份帮助您完成实名注册认证所需。</Text>
            <Text style={styles.descLineSty}>2.如果您是企业，您可以通过向我们提交企业名称、统一社会信用代码、企业营业执照扫描件、企业营业执照注册地址、企业法定代表人姓名、企业法定代表人身份证号来完成实名认证。前述信息中企业法定代表人身份证号属于个人敏感信息，收集此类信息的目的是为了认证您的身份，保障合同效力。</Text>
            <Text style={styles.descLineSty}>3.卧涛实名认证是卧涛网为用户设置的一个提升诚信品质的服务。通过实名认证的用户将会得到更多客户的信任，增强交流对接的可靠性，同时也有机会得到卧涛网的重点推荐服务。</Text>

            <Text style={styles.descLineSty}>银行帐号</Text>
            <Text style={styles.descLineSty}>卧涛网致力于为科技成果转让和创新服务提供安全高效的服务，在实名认证或一些付费服务中将会合理获取您的银行账户信息。</Text>

            <Text style={styles.descLineSty}>您的交易行为</Text>
            <Text style={styles.descLineSty}>1.我们跟踪IP地址是出于身份和交易真实性的识别、安全考虑和其它符合国家规定的要求。如果我们没有发现任何安全问题，我们会在适当的时候删除我们收集到的IP地址。我们还跟踪全天的页面访问数据。全天页面访问数据被用来反映网站的流量，以使我们可以为未来的发展制定计划（例如，增加服务器）。</Text>
            <Text style={styles.descLineSty}>2.因您的交易行为而产生的其它数据，我们将会用这些统计数据来给会员分类，以便有针对性地向我们的会员提供新的服务和机会。我们会通过您的邮件地址来通知您这些新的服务和机会。</Text>

            <Text style={styles.descLineSty}>信息自动收集</Text>
            <Text style={styles.descLineSty}>卧涛网有可能自动接收并记录您的浏览器和计算机上的信息，其中包括您的 IP 地址、卧涛网cookie 中的信息、软硬件特征信息以及您需求的网页记录，目的是为了向您提供更加精准和个性化的服务和内容。</Text>

            <Text style={styles.descLineSty}>Cookie的使用</Text>
            <Text style={styles.descLineSty}>cookies是少量的数据，在您未拒绝接受cookies的情况下，cookies将被发送到您的浏览器，并储存在您的计算机硬盘。我们使用 cookies储存您访问我们网站的相关数据，以便在您访问或再次访问我们的网站时，我们能识别您的身份，并通过分析数据为您提供更好更多的服务。</Text>
            <Text style={styles.descLineSty}>您有权选择接受或拒绝接受cookies。您可以通过修改浏览器的设置以拒绝接受cookies，但是我们需要提醒您，因为您拒绝接受cookies，您可能无法使用依赖于cookies的我们网站的部分功能。</Text>

            <Text style={styles.descLineSty}>公开的交易信息</Text>
            <Text style={styles.descLineSty}>您提供发布的供贸易的物品信息或报价将被显示在公共区域，这对任何用户来说是公开的。请注意所有在这些场所公开的信息会成为公共信息，请您在决定公布您的个人信息及物品信息前仔细考虑。</Text>
            <Text style={styles.descLineSty}>征得同意的例外</Text>

            <Text style={styles.descLineSty}>请您知悉，以下情形中，我们收集、使用个人信息无需征得您的授权同意：</Text>
            <Text style={styles.descLineSty}>1.与国家安全、国防安全等国家利益直接相关的；与公共安全、公共卫生、公众知情等重大公共利益直接相关的；</Text>
            <Text style={styles.descLineSty}>2.与犯罪侦查、起诉、审判和判决执行等直接相关的</Text>
            <Text style={styles.descLineSty}>3.出于维护您或其他个人的生命、财产、声誉等重大合法权益但又很难以得到本人同意的；</Text>
            <Text style={styles.descLineSty}>4.所收集的个人信息是您自行向社会公众公开的；</Text>
            <Text style={styles.descLineSty}>5.从合法公开披露的信息中收集的个人信息，如合法的新闻报道、政府信息公开等渠道；</Text>
            <Text style={styles.descLineSty}>6.根据您要求签订和履行合同所必需的；</Text>
            <Text style={styles.descLineSty}>7.用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；</Text>
            <Text style={styles.descLineSty}>8.为开展合法的新闻报道所必需的；</Text>
            <Text style={styles.descLineSty}>9.出于公共利益开展统计或学术研究所必要，且其对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；</Text>
            <Text style={styles.descLineSty}>10.法律法规规定的其他情形。</Text>
            <Text style={styles.descLineSty}>请注意，单独或与其他信息相结合无法识别您的身份或者与您直接建立联系的信息，不属于个人信息。如果我们将单独无法与任何特定个人建立联系的信息与其他信息结合用于识别自然人身份，或者将其与个人信息相结合使用，则在结合使用期间，此类信息将被视为个人信息。</Text>

            <Text style={[styles.titleLineSty, styles.strongSty]}>二、信息的披露</Text>
            <Text>我们不会向任何无关第三方提供、出售、出租、分享和交易我们所获取的用户个人信息，但除法律或有法律赋予权限的政府部门/检察院/法院要求或用户同意等原因外，我们未经用户同意不向除合作单位（如中国银联和工商行政管理部门）以外的第三方公开、透露用户个人隐私信息。但是，用户在注册时选择同意，或用户与卧涛网及合作单位之间就用户个人隐私信息公开或使用另有约定的除外，同时用户应自行承担因此可能产生的任何风险。</Text>
            <Text style={styles.descLineSty}>为方便您使用卧涛网服务及其他组织（如中国银联和工商行政管理部门）的服务（以下称其他服务），您同意并授权卧涛网将您的个人信息传递给您同时接受其他服务的其他组织，或从为您提供其他服务的其他组织获取您的个人信息。您同意我们可披露或使用您的个人信息以用于识别和（或）确认您的身份，或解决争议，或有助于确保网站安全、限制欺诈、非法或其他刑事犯罪活动，以履行我们的服务协议。</Text>
            <Text style={styles.descLineSty}>您同意我们可披露或使用您的个人信息以保护您的生命、财产之安全或为防止严重侵害他人之合法权益或为公共利益之需要。</Text>
            <Text style={styles.descLineSty}>您同意我们可披露或使用您的个人信息以改进我们的服务，并使我们的服务更能符合您的要求，从而使您在使用我们服务时得到更好的使用体验。</Text>
            <Text style={styles.descLineSty}>您同意我们利用您的个人信息与您联络，并向您提供您感兴趣的信息，如：产品信息。您接受“服务协议”和本隐私声明即为明示同意收取这些资料。</Text>
            <Text style={styles.descLineSty}>您同意我们将您与对方达成交易意向、成功对接或者参加报名卧涛网某项活动等情况在卧涛网上进行公告。</Text>
            <Text style={styles.descLineSty}>您同意我们的网站公布您提交的科技成果或服务的报价，而其他用户可以查询这些报价、科技成果和服务。</Text>
            <Text style={styles.descLineSty}>当我们被法律强制或依照政府/检察院/法院因识别涉嫌侵权行为人的要求而提供您的信息时，我们将善意地披露您的资料。</Text>

            <Text style={[styles.titleLineSty, styles.strongSty]}>三、信息的管理</Text>
            <Text>安全</Text>
            <Text style={styles.descLineSty}>我们努力为用户的信息安全提供保障，以防止信息的泄露、丢失、不当使用、未经授权访问和披露等。我们使用多方位的安全保护措施，以确保用户的个人信息保护处于合理的安全水平，包括技术保护手段、管理制度控制、安全体系保障等诸多方面。这些安全措施包括向其它服务器备份数据和对用户密码加密。尽管我们有这些安全措施，但请注意在因特网上不存在“完善的安全措施”。</Text>
            <Text style={styles.descLineSty}>外部链接</Text>
            <Text style={styles.descLineSty}>本站含有到其他网站的链接。卧涛网对那些网站的隐私保护措施不负任何责任。我们可能在任何需要的时候增加商业伙伴或共用品牌的网站。</Text>
            <Text style={styles.descLineSty}>数据存储地点及期限</Text>
            <Text style={styles.descLineSty}>我们在本平台收集和产生的个人信息，将存储在卧涛网（或）其关联公司的服务器上。</Text>
            <Text style={styles.descLineSty}>除非法律法规有其他要求，我们仅在为实现服务目的所必需的时间内保留您的个人信息，并在超出合法的保留时间后删除或匿名化处理您的个人信息。</Text>
            <Text style={styles.descLineSty}>此外，当我们的产品或服务发生停止运营的情形时，我们将以推送通知、公告等形式通知您，并在合理期限内删除您的个人信息或匿名化处理您的个人信息。</Text>

            <Text style={[styles.titleLineSty, styles.strongSty]}>四、对未成年人的保护</Text>
            <Text>如果您未满18周岁，您无权使用本公司服务，因此我们希望您不要试图注册成为会员。如果您未满18周岁但希望进行交易，我们建议通过您的父母或其他监护人注册成为会员的方式进行交易。</Text>
            <Text style={styles.descLineSty}>如果您未满18周岁，在实名认证的时候提供虚假的证件或证明文件，由此产生的一切法律责任将由您及您的父母或其他监护人承担。</Text>

            <Text style={[styles.titleLineSty, styles.strongSty]}>五、通知和修订</Text>
            <Text>为给您提供更好的服务，我们的业务将不时变化，本隐私声明也将随之调整。未经您明确同意，我们不会削减您依据本隐私保护声明所享有的权利。我们会通过在我们网站、移动端上发出更新版本或以其他方式提醒您相关内容的更新，也请您访问我们以便及时了解最新的隐私保护声明。在前述情况下，若您继续使用我们的服务，即表示同意接受修订后的声明并受之约束。</Text>

            <Text style={[styles.titleLineSty, styles.strongSty]}>六、如何联系我们</Text>
            <Text>如果您对本隐私保护声明或卧涛网的隐私保护措施以及您在使用中的问题有任何意见和建议，请通过以下方式与我们联系，我们将在15个工作日内回复您的请求：</Text>
            <Text style={styles.descLineSty}>1.您可以联系我们的客服热线：400-0507-580 来进行反馈。</Text>
            <Text style={styles.descLineSty}>2.我们还设立了客服邮箱：wotaokeji@163.com，欢迎您随时反馈您的意见。</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containSty: {
    padding: dp2px(10),
    backgroundColor: '#ffffff'
  },
  titleSty: {
    fontSize: dp2px(12),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: dp2px(10),
    color: '#666666'
  },
  descContainSty: {
    display: 'flex',
    flexDirection: 'column',
    color: '#666666'
  },
  titleLineSty: {
    marginVertical: dp2px(10),
    color: '#666666'
  },
  descLineSty: {
    marginTop: dp2px(5),
    color: '#666666'
  },
  strongSty: {
    fontWeight: 'bold'
  }
})