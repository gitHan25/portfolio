# CV Download Setup Instructions

## Step 1: Add Your CV File

1. Place your CV PDF file in the `public` directory
2. Name it exactly: `Muhammad_Farhan_Editya_CV.pdf`
3. The file path should be: `portfolio/public/Muhammad_Farhan_Editya_CV.pdf`

## Step 2: Test the Download

1. Start your development server: `npm run dev`
2. Navigate to your portfolio website
3. Click the "Download CV" button in the hero section
4. The file should download automatically
5. You should see a success toast notification

## Features Included

✅ **Loading State**: Button shows "Downloading..." with spinner during download
✅ **Error Handling**: Shows error toast if file not found
✅ **Success Feedback**: Shows success toast when download completes
✅ **File Validation**: Checks if file exists before attempting download
✅ **Animations**: Maintains the motion animations on button hover/tap

## File Requirements

- **Format**: PDF only
- **Name**: Must be exactly `Muhammad_Farhan_Editya_CV.pdf`
- **Location**: Must be in the `public` directory
- **Accessibility**: File will be publicly accessible at `/Muhammad_Farhan_Editya_CV.pdf`

## Troubleshooting

If the download doesn't work:

1. Check if the file exists in `public/Muhammad_Farhan_Editya_CV.pdf`
2. Check the browser console for errors
3. Verify the file name matches exactly (case-sensitive)
4. Ensure the file is a valid PDF

## Alternative File Name

If you want to use a different file name, update the following in `src/components/download-cv-button.tsx`:

```typescript
// Change these lines:
const response = await fetch("/YOUR_NEW_FILENAME.pdf", { method: "HEAD" });
link.href = "/YOUR_NEW_FILENAME.pdf";
link.download = "YOUR_NEW_FILENAME.pdf";
```

## Deployment Notes

When deploying to Vercel, Netlify, or other platforms:

- The file in `public` directory will be automatically served
- No additional configuration needed
- File will be available at `https://yourdomain.com/Muhammad_Farhan_Editya_CV.pdf`
