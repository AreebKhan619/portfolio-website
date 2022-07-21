import styled from "styled-components";

export const LibrariesUsedContainer = styled.div`
  .list {
    border-radius:.5rem;
    background: white;
    position: relative;
    overflow: hidden;

    .bg-img {
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0;
      border-radius: inherit;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffd700' fill-opacity='1' d='M0 128L40 106.7C80 85 160 43 240 58.7C320 75 400 149 480 170.7C560 192 640 160 720 128C800 96 880 64 960 69.3C1040 75 1120 117 1200 117.3C1280 117 1360 75 1400 53.3L1440 32L1440 320L1400 320C1360 320 1280 320 1200 320C1120 320 1040 320 960 320C880 320 800 320 720 320C640 320 560 320 480 320C400 320 320 320 240 320C160 320 80 320 40 320L0 320Z'%3E%3C/path%3E%3C/svg%3E");
      filter: grayscale(1);

      background-size: 100%;
      background-color: #ffffffeb;
      background-blend-mode: hue;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .content {
      z-index: 1;
      position: relative;
      padding:.5rem 1rem;
    }
  }
  .list-items {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;
    .item {
      text-align: center;
      width: 8rem;
      img.icon {
        width: 4.5rem;
        height: 4.5rem;
        object-fit: cover;
      }
      .title {
        font-size: 0.8em;
      }
    }
  }
`;
