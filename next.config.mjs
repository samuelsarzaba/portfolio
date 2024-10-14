/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/Samuel Sarzaba Resume.pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Samuel Sarzaba Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
