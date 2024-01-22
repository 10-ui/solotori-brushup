import Image from 'next/image';
import Logo from '@/public/images/logo.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bg-bases w-390 text-black">
        <div className="px-5 py-10">
          <Image src={Logo} alt="ソロトリロゴ"></Image>
          <ul className="mt-4">
            <li className="font-bold">概要</li>
            <li>
              <Link href="/">トップページ</Link>
            </li>
            <li>旅マインドのつくり方</li>
            <li className="mb-4">
              <Link href="/handbook">
                ハンドブック依頼フォーム
              </Link>
            </li>
            <li className="font-bold">特別コンテンツ</li>
            <li>旅ビンゴ</li>
            <li>ログイン</li>
            <li className="mb-4">新規登録</li>
            <li className="font-bold">企業情報 </li>
            <li>
              <Link href="https://hone-corp.jp/">
                運営会社
              </Link>
            </li>
            <li>
              <Link href="https://hone-corp.jp/solotori-terms">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/policy">
                プライバシーポリシー
              </Link>
            </li>
          </ul>
        </div>
        <p className="py-4 text-sm text-bases bg-main text-center w-vw">
          Copyright &copy; ソロトリ All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
